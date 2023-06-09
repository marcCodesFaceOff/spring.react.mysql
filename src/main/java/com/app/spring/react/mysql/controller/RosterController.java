package com.app.spring.react.mysql.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.app.spring.react.mysql.modal.Person;
import com.app.spring.react.mysql.service.RosterService;
@RestController
@CrossOrigin
@RequestMapping("/api")
public class RosterController {

    @Autowired
    private RosterService rosterService;

    @GetMapping("/roster")
    public List<Person> get() {
        return rosterService.get();
    }

    @PostMapping("/roster")
    public Person save(@RequestBody Person person) {
        rosterService.save(person);
        return person;
    }

    @GetMapping("/roster/{bed}")
    public Person get(@PathVariable int bed) {
        return rosterService.get(bed);
    }

    @DeleteMapping("/roster/{bed}")
    public String delete(@PathVariable int bed) {
        rosterService.delete(bed);
        return "Roster removed person at bed "+bed;
    }

    @PutMapping("/roster")
    public Person update(@RequestBody Person person) {
        rosterService.save(person);
        return person;
    }
}
