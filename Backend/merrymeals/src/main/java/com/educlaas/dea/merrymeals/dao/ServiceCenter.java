package com.educlaas.dea.merrymeals.dao;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "service_center")
public class ServiceCenter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long scId;

    private String scName;
    private String scDetails;
    private String sclongitude;
    private String scLatitude;
}
