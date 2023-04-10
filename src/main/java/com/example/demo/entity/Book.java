package com.example.demo.entity;

public class Book {

    private String name;
    private String bookId;

    private String cover;
    private String title;
    private String author;
    private String language;
    private String price;
    private String number;
    private String description;
    private String Type;

    public Book(String id, String cover, String title, String author, String language, String price,String number,String description,String Type) {
        this.bookId = id;
        this.cover=cover;
        this.name = title;
        this.author = author;
        this.language = language;
        this.price = price;
        this.description=description;
        this.Type=Type;
        this.number=number;
    }


    public String getId() {
        return bookId;
    }
    public void setId(String id) {
        this.bookId = id;
    }

    public String getNumber() {
        return number;
    }
    public void setNumber(String number) {
        this.number = number;
    }

    public String getType() {
        return Type;
    }
    public void setType(String Type) {
        this.Type = Type;
    }

    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }

    public String getCover() {
        return cover;
    }
    public void setCover(String cover) {
        this.cover = cover;
    }

    public String getTitle() {
        return name;
    }
    public void setTitle(String title) {
        this.name = title;
    }

    public String getAuthor() {
        return author;
    }
    public void setAuthor(String author) {
        this.author = author;
    }

    public String getLanguage() {
        return language;
    }
    public void setLanguage(String language) {
        this.language = language;
    }

    public String getPrice() {
        return price;
    }
    public void setSales(String sales) {
        this.price = sales;
    }


    @Override
    public String toString() {
        return String.format(
                "Book[id=%d, title='%s', author='%s', language='%s', sales='%s']",
                bookId, title, author, language,price);
    }

}
