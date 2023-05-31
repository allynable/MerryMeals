package com.educlaas.dea.merrymeals.payload;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

//Local or Google or Facebook Register
public class MemberRegister {
	@NotBlank
	private String firstName;

	@NotBlank
	private String lastName;

	@NotBlank
	private String longitude;

	@NotBlank
	private String latitude;

	@Email
	@NotBlank
	private String email;

	@NotBlank
	private String dob;

	@NotBlank
	private String contactNumber;
	
	@NotBlank
	private String password;

	@NotBlank
	private String condition;

	@NotBlank
	private String allergies;

	private String caregiverName;
	private String relationship;
	private String caregiverContact;

	public String getFirstName() {
		return this.firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return this.lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getLongitude() {
		return this.longitude;
	}

	public void setLongitude(String longitude) {
		this.longitude = longitude;
	}

	public String getLatitude() {
		return this.latitude;
	}

	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getDob() {
		return this.dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public String getContactNumber() {
		return this.contactNumber;
	}

	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getCondition() {
		return this.condition;
	}

	public void setCondition(String condition) {
		this.condition = condition;
	}

	public String getAllergies() {
		return this.allergies;
	}

	public void setAllergies(String allergies) {
		this.allergies = allergies;
	}

	public String getCaregiverName() {
		return this.caregiverName;
	}

	public void setCaregiverName(String caregiverName) {
		this.caregiverName = caregiverName;
	}

	public String getRelationship() {
		return this.relationship;
	}

	public void setRelationship(String relationship) {
		this.relationship = relationship;
	}

	public String getCaregiverContact() {
		return this.caregiverContact;
	}

	public void setCaregiverContact(String caregiverContact) {
		this.caregiverContact = caregiverContact;
	}


	@Override
	public String toString() {
		return "{" +
			" firstName='" + getFirstName() + "'" +
			", lastName='" + getLastName() + "'" +
			", longitude='" + getLongitude() + "'" +
			", latitude='" + getLatitude() + "'" +
			", email='" + getEmail() + "'" +
			", dob='" + getDob() + "'" +
			", contactNumber='" + getContactNumber() + "'" +
			", password='" + getPassword() + "'" +
			", condition='" + getCondition() + "'" +
			", allergies='" + getAllergies() + "'" +
			", caregiverName='" + getCaregiverName() + "'" +
			", relationship='" + getRelationship() + "'" +
			", caregiverContact='" + getCaregiverContact() + "'" +
			"}";
	}

}
