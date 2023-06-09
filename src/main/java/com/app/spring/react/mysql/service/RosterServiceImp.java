package com.app.spring.react.mysql.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.app.spring.react.mysql.dao.RosterDAO;
import com.app.spring.react.mysql.modal.Person;
import org.springframework.web.bind.annotation.CrossOrigin;

@Service
public class RosterServiceImp implements RosterService {

    @Autowired
    private RosterDAO rosterDAO;

    @Transactional
    @Override
    public List<Person> get() {
        return rosterDAO.get();
    }
    @Transactional
    @Override
    public Person get(int bed) {
        return rosterDAO.get(bed);
    }
    @Transactional
    @Override
    public void save(Person person) {
        rosterDAO.save(person);

    }
    @Transactional
    @Override
    public void delete(int bed) {
        rosterDAO.delete(bed);

    }
}

