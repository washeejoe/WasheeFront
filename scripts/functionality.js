"use strict"

const UNITS_BEING_SOLD = 10;
const INV_ADJUST = 1000;

let inventoryPersonal2x1=1000;
let inventoryPersonal1x1=1000;
let inventoryBong2x1=1000;
let inventoryBong1x1=1000;
let inventoryCommercial2x1=999;
let inventoryCommercial1x1=1000;

//Units sold of each one
let soldPersonal2x1 = INV_ADJUST - inventoryPersonal2x1;
let soldPersonal1x1 = INV_ADJUST - inventoryPersonal2x1;
let soldBong2x1 = INV_ADJUST - inventoryBong2x1;
let soldBong1x1 = INV_ADJUST - inventoryBong2x1;
let soldCommercial2x1 = INV_ADJUST - inventoryCommercial2x1;
let soldCommercial1x1 = INV_ADJUST - inventoryCommercial1x1;

let totalUnitsSold = soldPersonal2x1 + soldPersonal1x1 + soldBong2x1 + soldBong1x1 + soldCommercial2x1 + soldCommercial1x1;
let unitsLeft = UNITS_BEING_SOLD - totalUnitsSold;

//set in appropriate HTML except progress bar:

/*document.getElementsByClassName("number_left").innerHTML="hello";
document.getElementById("asterisk").innerHTML="jello!";
alert(unitsLeft);*/
$(".number_left").html(unitsLeft);
$(".numberSelling").html(UNITS_BEING_SOLD);
let percentageFunded = (totalUnitsSold/UNITS_BEING_SOLD)*100;
$("#barLegend").html(percentageFunded+"% Funded")

$("#progressBar").css("width", percentageFunded+"%");

$(document).ready(function(){
    $('#asterisk').click(function(){
        $('.nav-tabs a[href="#nav-product"]').tab('show');
        $('html, body').animate({
            scrollTop: $("#Performance").offset().top
        }, 1000);
    });
    $('#learnHere').click(function(){
        $('.nav-tabs a[href="#nav-campaign"]').tab('show');
        $('html, body').animate({
            scrollTop: $("#nav-campaign").offset().top
        }, 1000);
    });
    $('#learnFounders').click(function(){
        $('.nav-tabs a[href="#nav-company"]').tab('show');
        $('html, body').animate({
            scrollTop: $("#theFounders").offset().top
        }, 500);
    });
    $('#hereToTimeline').click(function(){
        $('.nav-tabs a[href="#nav-campaign"]').tab('show');
        $('html, body').animate({
            scrollTop: $("#timeline").offset().top
        }, 500);
    });
});
