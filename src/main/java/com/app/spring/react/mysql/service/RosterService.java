package com.app.spring.react.mysql.service;

import java.util.List;
import com.app.spring.react.mysql.modal.Person;
public interface RosterService {
    List<Person> get();

    Person get(int bed);

    void save(Person person);

    void delete(int bed);
}
