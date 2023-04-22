package com.app.spring.react.mysql.dao;

import java.util.List;
import jakarta.persistence.EntityManager;
import org.hibernate.query.Query;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.app.spring.react.mysql.modal.Person;
@Repository
public class RosterDAOImp implements RosterDAO {
    @Autowired
    private EntityManager entityManager;
    @Override
    public List<Person> get() {
        Session currSession = entityManager.unwrap(Session.class);
        Query<Person> query = currSession.createQuery("from Person", Person.class);
        return query.getResultList();
    }
    @Override
    public Person get(int bed) {
        Session currSession = entityManager.unwrap(Session.class);
        return currSession.get(Person.class, bed);
    }
    @Override
    public void save(Person person) {

        Session currSession = entityManager.unwrap(Session.class);
        currSession.saveOrUpdate(person);
    }
    @Override
    public void delete(int bed) {
        Session currSession = entityManager.unwrap(Session.class);
        Person person = currSession.get(Person.class, bed);
        currSession.delete(person);
    }
}



