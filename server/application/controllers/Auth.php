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
        $email = $this->input->post('email');
        $password = $this->input->post('password');

        if (!empty($email) && !empty($password)){
            $query = $this->db->get_where('users', array('user_email' => $email));
			if ($query->num_rows() > 0) {
                $row = $query->row();
                if(md5($password) == $row->user_password)
				{
                    $this->session->set_userdata('user_login', 1);
			        $this->session->set_userdata('user_id', $row->user_id);
                    $this->session->set_userdata('user_name', $row->user_name);
                    $this->session->set_userdata('user_email', $row->user_email);
			        $this->session->set_userdata('token_code', $row->token_code);
			        $this->session->set_userdata('account_type', 'user');
                    $response["error"] = False;
                    $response["user_id"] = $row->user_id;
                    $response["user_name"] = $row->user_name;
                    $response["user_email"] = $row->user_email;
                    $response["token_code"] = $row->token_code;
                }
                else{
                    $response["error"] = TRUE;
                    $response["error_msg"] = "Please enter the correct password!";

                }

            }
            else{
                $response["error"] = TRUE;
                $response["error_msg"] = "No account found with such details!";
            }

        }
        else{
            $response["error"] = TRUE;
            $response["error_msg"] = "Empty post parameters";
        }
        header("Access-Control-Allow-Origin: http://localhost:3000");
        header("Access-Control-Allow-Credentials: true");
        header("Access-Control-Allow-Methods: PUT, POST, OPTIONS"); 
        header("Access-Control-Allow-Headers: *");
        header('Content-Type: application/json');
        echo json_encode($response);
    }

    function signup(){
        //test
        /*
        $name = $this->input->get('name');
	    $email = $this->input->get('email');
        $password = $this->input->get('password');
        */
        //real
        $name = $this->input->post('name');
	    $email = $this->input->post('email');
        $password = $this->input->post('password');
        //check if email already exist
        if (!empty($name) && !empty($email) && !empty($password)){
            $query = $this->db->get_where('users', array('user_email' => $email));
			if (!$query->num_rows() > 0) {
                //add user to the database
				$password = md5($password);
			    $code = md5(uniqid(rand()));
			    //date created
                $date=date("Y-m-d h:i:sa");
			    $data = array(
			        'user_name' => $name,
			        'user_email' => $email,
			        'user_password' => $password,
			        'token_code' => $code,
			        'date_created' => $date
                );
                $this->db->insert('users', $data);
                $response["error"] = False;
                $response["msg"] = "Account created successfully you can now login!";

            }
            else{
                //account alreay exist
				$response["error"] = TRUE;
		        $response["error_msg"] = "User already exist please use a different email!";
            }

        }
        else{
            // error no post parameters
            $response["error"] = TRUE;
            $response["error_msg"] = "Empty post parameters!";

        }
        header("Access-Control-Allow-Origin: http://localhost:3000");
        header("Access-Control-Allow-Credentials: true");
        header("Access-Control-Allow-Methods: PUT, POST, OPTIONS"); 
        header("Access-Control-Allow-Headers: *");
        header('Content-Type: application/json');
        echo json_encode($response);
        
    }

    function isLoggedIn(){
        if($this->session->userdata('user_login') == 1){
            $response["is_logged"] = TRUE;
            $response["user_id"] = $this->session->userdata('user_id');
            $response["user_name"] = $this->session->userdata('user_name');
            $response["user_email"] = $this->session->userdata('user_email');
            $response["token_code"] = $this->session->userdata('token_code');
        }
        else{
            $response["is_logged"] = FALSE;
        }
        header("Access-Control-Allow-Origin: http://localhost:3000");
        header("Access-Control-Allow-Credentials: true");
        header("Access-Control-Allow-Methods: PUT, POST, OPTIONS"); 
        header("Access-Control-Allow-Headers: *");
        header('Content-Type: application/json');
        echo json_encode($response);

    }

    function logout()
	{
        //log out
        $response["logout"] = "true";
        $this->session->sess_destroy();  // destroy all sessions and refresh 
        header("Access-Control-Allow-Origin: http://localhost:3000");
        header("Access-Control-Allow-Credentials: true");
        header('Content-Type: application/json');
        echo json_encode($response);
		
	}  
}