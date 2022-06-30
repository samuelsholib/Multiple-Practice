package com.samdjava.springsecurityjpa.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeResource {

    @GetMapping("/")
    public String home() {
        return ("<h6>Welcome Home</h6>");
    }

    @GetMapping("/user")
    public String user() {
        return ("<h6>Welcome User</h6>");
    }

    @GetMapping("/admin")
    public String Admin() {
        return ("<h6>Welcome Admin</h6>");
    }
}
