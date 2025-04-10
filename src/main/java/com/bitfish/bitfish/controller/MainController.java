package com.bitfish.bitfish.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/main")
    public String redirectToReact() {
        return "forward:/index.html";  // React에서 빌드된 index.html
    }
}
