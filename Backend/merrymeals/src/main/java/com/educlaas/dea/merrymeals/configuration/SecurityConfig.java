package com.educlaas.dea.merrymeals.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.BeanIds;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.educlaas.dea.merrymeals.jwtsecurity.TokenAuthenticationFilter;
import com.educlaas.dea.merrymeals.oauth2security.AuthorizationFailureHandler;
import com.educlaas.dea.merrymeals.oauth2security.AuthorizationSuccessHandler;
import com.educlaas.dea.merrymeals.oauth2security.HttpCookieAuthorizationRequestRepo;
import com.educlaas.dea.merrymeals.service.OAuthMemberServiceImpl;
import com.educlaas.dea.merrymeals.service.OAuthVolunteerServiceImpl;
import com.educlaas.dea.merrymeals.service.VolunteerServiceImpl;
import com.educlaas.dea.merrymeals.service.MemberServiceImpl;

//Secure or Protect to unauthorized user to protect resource without valid JWT token
@Configuration
//use to enable configure class
@EnableWebSecurity
//use to enable Web Security
@EnableGlobalMethodSecurity(
        securedEnabled = true,
        //security for controller, service method
        jsr250Enabled = true,
        //@RolesAllowed annotation
        prePostEnabled = true
        //PreAuthorize or PostAuthorize
)

public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private MemberServiceImpl memberServiceImpl;
    
    @Autowired
    private VolunteerServiceImpl volunteerServiceImpl;
    
//    @Autowired
//    private AdminServiceImpl adminServiceImpl;
    
    @Bean
    public TokenAuthenticationFilter tokenAuthenticationFilter() {
        return new TokenAuthenticationFilter();
    }


    @Override
    public void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
        authenticationManagerBuilder
        .userDetailsService(memberServiceImpl).passwordEncoder(passwordEncoder())
        .and()
        .userDetailsService(volunteerServiceImpl).passwordEncoder(passwordEncoder());
//        .and()
//        .userDetailsService(adminServiceImpl).passwordEncoder(passwordEncoder());
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }


    @Bean(BeanIds.AUTHENTICATION_MANAGER)
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    //OAuth2 Login
    @Autowired
    private OAuthMemberServiceImpl oAuthMemberServiceImpl;
    
    @Autowired
    private OAuthVolunteerServiceImpl oAuthVolunteerServiceImpl;
    
    @Autowired
    private AuthorizationSuccessHandler authorizationSuccessHandler;
    
    @Autowired
    private AuthorizationFailureHandler authorizationFailureHandler;
    
    @Bean
    public HttpCookieAuthorizationRequestRepo cookieAuthorizationRequestRepo() {
    	return new HttpCookieAuthorizationRequestRepo();
    }
    

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .cors()
                    .and()
                .sessionManagement()
                    .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                    .and()
                .csrf()
                    .disable()
                .formLogin()
                    .disable()
                .httpBasic()
                    .disable()                    
                .authorizeRequests()
                    .antMatchers("/",
                        "/error",
                        "/favicon.ico",
                        "/**/*.png",
                        "/**/*.gif",
                        "/**/*.svg",
                        "/**/*.jpg",
                        "/**/*.html",
                        "/**/*.css",
                        "/**/*.js")
                        .permitAll()
                    .antMatchers("/mow/**", "/oauth2/**", "/webhook/**","/online/**")
                        .permitAll()
//                    .antMatchers("/online/**")
//                    	.hasRole("MEMBER")
                    .anyRequest()
                        .authenticated()
                    .and()
                .oauth2Login()
                    .authorizationEndpoint()
                        .baseUri("/oauth2/authorize")
                        .authorizationRequestRepository(cookieAuthorizationRequestRepo())
                        .and()
                    .redirectionEndpoint()
                        .baseUri("/oauth2/callback/*")
                        .and()
                    .userInfoEndpoint()
                        .userService(oAuthMemberServiceImpl)
                        .and()
                        .userInfoEndpoint()
                        .userService(oAuthVolunteerServiceImpl)
                        .and()
                    .successHandler(authorizationSuccessHandler)
                    .failureHandler(authorizationFailureHandler);
                 

        // Add our custom Token based authentication filter
        http.addFilterBefore(tokenAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class);
    }
}
