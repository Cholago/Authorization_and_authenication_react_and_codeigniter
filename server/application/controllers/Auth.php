<?php
class Auth extends CI_Controller {
    //React js auth api
    function __construct() {

        parent::__construct();
        $this->load->database();
        $this->load->library('session');
        $this->load->helper('url_helper');

    }

    function index(){
        echo 'Auth api v: 1.0.1';
    }

    function login(){

    }

    function signup(){
        
    }
}