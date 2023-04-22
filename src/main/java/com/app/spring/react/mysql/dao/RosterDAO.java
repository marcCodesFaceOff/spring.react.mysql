package com.app.spring.react.mysql.dao;

import java.util.List;
import com.app.spring.react.mysql.modal.Person;
public interface RosterDAO {

    List<Person> get();

    Person get(int bed);

    void save(Person employee);

    void delete(int bed);
}