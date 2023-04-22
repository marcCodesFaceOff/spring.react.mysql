package com.app.spring.react.mysql.modal;

import java.sql.Date;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name = "tb_emp")
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Integer bed;
    @Column
    private String firstName;
    @Column
    private String lastName;
    @Column
    private Date dob;
    @Column
    private String gender;
    @Override
    public String toString() {
        return "Employee [bed= " + bed + ", firstName=" + firstName + ", lastName=" + lastName + ", dob=" + dob + ", gender="
                + gender + "]";
    }
    public Integer getBed() {
        return bed;
    }
    public void setBed(Integer bed) {
        this.bed = bed;
    }
    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public String getLastName() {
        return lastName;
    }
    public void setDepartment(String lastName) {
        this.lastName = lastName;
    }
    public Date getDob() {
        return dob;
    }
    public void setDob(Date dob) {
        this.dob = dob;
    }
    public String getGender() {
        return gender;
    }
    public void setGender(String gender) {
        this.gender = gender;
    }
}