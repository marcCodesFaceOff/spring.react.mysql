package com.app.spring.react.mysql.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.app.spring.react.mysql.dao.RosterDAO;
import com.app.spring.react.mysql.modal.Person;
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
    public void save(Person employee) {
        rosterDAO.save(employee);

    }
    @Transactional
    @Override
    public void delete(int id) {
        rosterDAO.delete(id);

    }
}

