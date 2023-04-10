package com.example.demo.controllers;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.serializer.SerializerFeature;
import com.example.demo.entity.Book;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@RestController
public class HelloWorldController {

    @Autowired
    JdbcTemplate jdbcTemplate;

//    @CrossOrigin

    @RequestMapping("/getBook")
    public String getBook(@RequestParam("id") String id){

        List<Book> result = new ArrayList<Book>();
        List<Book> tmp=new ArrayList<Book>();
        Book book=new Book("1","https://img2.baidu.com/it/u=1478920100,2834656055&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500","java技术核心卷Ⅱ","CayS.Horstmann，GaryCornell","English","95.2","100","Java核心技术 卷II：高级特性(第9版·英文版)(上、下册)专为做实际项目的程序员编写，是一本真实可信、不偏不倚且简单直接的Java教程，书中使用了全面测试过的代码示例来阐述关键的Java语言与库的特性，体现了最佳的编程实践。","computer");
        Book book2=new Book("2","https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.alicdn.com%2Fimgextra%2Fi1%2F708307132%2FTB2x6y7lsrI8KJjy0FhXXbfnpXa_%21%21708307132.jpg_2200x2200Q90s50.jpg&refer=http%3A%2F%2Fimg.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1682044083&t=bdcb02a1bfdfbc63fb283a45fd5727e4","深入理解计算机系统","Bryant,R.E.","English","136.9","52","《深入理解计算机系统》是理解计算机系统首选书目，是10余万程序员的共同选择。卡内基-梅隆、北京大学、清华大学、上海交通大学等国内外众多知名高校选用指定教材。从程序员视角全面剖析的实现细节，使读者深刻理解程序的行为，将所有计算机系统的相关知识融会贯通.","computer");
        tmp.add(book);
        tmp.add(book2);
        for(int i=0;i<tmp.size();++i){
            if(tmp.get(i).getId().equals(id)) {
                result.add(tmp.get(i));
            }
        }
        Iterator<Book> it = result.iterator();
        ArrayList<JSONArray> booksJson = new ArrayList<JSONArray>();
        while (it.hasNext()) {
            Book book1 = (Book) it.next();
            ArrayList<String> arrayList = new ArrayList<String>();
            arrayList.add(book1.getId());
            arrayList.add(book1.getCover());
            arrayList.add(book1.getTitle());
            arrayList.add(book1.getAuthor());
            arrayList.add(book1.getLanguage());
            arrayList.add(book1.getPrice());
            arrayList.add(book1.getNumber());
            arrayList.add(book1.getDescription());
            arrayList.add(book1.getType());
            booksJson.add((JSONArray) JSONArray.toJSON(arrayList));
        }
        String  booksString = JSON.toJSONString(booksJson, SerializerFeature.BrowserCompatible);

        return booksString;

    }

    @RequestMapping("/getBooks")
    public String getBooks() {
        final Logger log = LoggerFactory.getLogger(HelloWorldController.class);
        List<Book> result = new ArrayList<Book>();

        log.info("Querying Books");
        Book book=new Book("1","https://img2.baidu.com/it/u=1478920100,2834656055&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500","java技术核心卷Ⅱ","CayS.Horstmann，GaryCornell","English","95.2","100","Java核心技术 卷II：高级特性(第9版·英文版)(上、下册)专为做实际项目的程序员编写，是一本真实可信、不偏不倚且简单直接的Java教程，书中使用了全面测试过的代码示例来阐述关键的Java语言与库的特性，体现了最佳的编程实践。","computer");
        Book book2=new Book("2","https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.alicdn.com%2Fimgextra%2Fi1%2F708307132%2FTB2x6y7lsrI8KJjy0FhXXbfnpXa_%21%21708307132.jpg_2200x2200Q90s50.jpg&refer=http%3A%2F%2Fimg.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1682044083&t=bdcb02a1bfdfbc63fb283a45fd5727e4","深入理解计算机系统","Bryant,R.E.","English","136.9","52","《深入理解计算机系统》是理解计算机系统首选书目，是10余万程序员的共同选择。卡内基-梅隆、北京大学、清华大学、上海交通大学等国内外众多知名高校选用指定教材。从程序员视角全面剖析的实现细节，使读者深刻理解程序的行为，将所有计算机系统的相关知识融会贯通.","computer");
        result.add(book);
        result.add(book2);

        Iterator<Book> it = result.iterator();
        ArrayList<JSONArray> booksJson = new ArrayList<JSONArray>();
        while (it.hasNext()) {
            Book book1 = (Book) it.next();
            ArrayList<String> arrayList = new ArrayList<String>();
            arrayList.add(book1.getId());
            arrayList.add(book1.getCover());
            arrayList.add(book1.getTitle());
            arrayList.add(book1.getAuthor());
            arrayList.add(book1.getLanguage());
            arrayList.add(book1.getPrice());
            arrayList.add(book1.getNumber());
            arrayList.add(book1.getDescription());
            arrayList.add(book1.getType());
            booksJson.add((JSONArray) JSONArray.toJSON(arrayList));
        }
        String  booksString = JSON.toJSONString(booksJson, SerializerFeature.BrowserCompatible);

        System.out.println(booksString);

        return booksString;
    }
}
