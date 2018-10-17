"use strict"

let unitsLeft = units_being_sold - totalUnitsSold;

$(".number_left").html(unitsLeft);
$(".numberSelling").html(units_being_sold);
let percentageFunded = (totalUnitsSold/units_being_sold)*100;
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
