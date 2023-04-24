package com.app.spring.react.mysql.modal;

import java.sql.Date;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name = "tb_roster")
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Integer bed;
    @Column
    private String first;
    @Column
    private String last;
    @Column
    private Date date;
    @Column
    private String cm;
    @Override
    public String toString() {
        return "Employee [bed= " + bed + ", firstName=" + first + ", lastName=" + last + ", date=" + date + ", cm="
                + cm + "]";
    }
    public Integer getBed() {
        return bed;
    }
    public void setBed(Integer bed) {
        this.bed = bed;
    }
    public String getFirstName() {
        return first;
    }
    public void setFirstName(String first) {
        this.first = first;
    }
    public String getLastName() {
        return last;
    }
    public void setLastName(String last) {
        this.last = last;
    }
    public Date getDate() {
        return date;
    }
    public void setDate(Date date) {
        this.date = date;
    }
    public String getGender() {
        return cm;
    }
    public void setGender(String gender) {
        this.cm = cm;
    }
}