package org.jsp.Reservationapp.Controller;

import org.jsp.Reservationapp.Model.User;
import org.jsp.Reservationapp.Service.UserService;
import org.jsp.Reservationapp.dto.ResponseStructure;
import org.jsp.Reservationapp.dto.UserRequest;
import org.jsp.Reservationapp.dto.UserResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
@CrossOrigin
@RestController
@RequestMapping("/api/users")
public class UserController {
  
	@Autowired
	 private UserService userService;
	 
	 @PostMapping
	 public ResponseEntity<ResponseStructure<UserResponse>> saveUser(@Valid @RequestBody UserRequest userrequest,HttpServletRequest request){
		 return  userService.saveUser(userrequest,request);
	 }
	
		@PutMapping
		public ResponseEntity<ResponseStructure<UserResponse>> updateUser(@RequestBody UserRequest userrequest,int id) {
			return userService.update(userrequest, id);
		}


		@PostMapping("/verify-by-phone")
		public ResponseEntity<ResponseStructure<UserResponse>> verify(@RequestParam long phone, @RequestParam String password) {
			return userService.verify(phone, password);
		}

		@PostMapping("/verify-by-email")
		public ResponseEntity<ResponseStructure<UserResponse>> verify(@RequestParam String email, @RequestParam String password) {
			return userService.verify(email, password);
		}

		@DeleteMapping("/{id}")
		public ResponseEntity<ResponseStructure<String>> delete(@PathVariable int id) {
			return userService.delete(id);
		}
		@GetMapping("/activate")
		public String activate(@RequestParam String token) {
			return userService.activate(token);
		}

}

