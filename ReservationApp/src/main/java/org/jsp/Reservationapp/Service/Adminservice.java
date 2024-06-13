package org.jsp.Reservationapp.Service;

import java.util.Optional;

import org.jsp.Reservationapp.Dao.AdminDao;
import org.jsp.Reservationapp.Model.Admin;
import org.jsp.Reservationapp.dto.AdminRequest;
import org.jsp.Reservationapp.dto.AdminResponse;
import org.jsp.Reservationapp.dto.EmailConfiguration;
import org.jsp.Reservationapp.dto.ResponseStructure;
import org.jsp.Reservationapp.exception.AdminNotFoundException;
import org.jsp.Reservationapp.util.AccountStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import jakarta.servlet.http.HttpServletRequest;
import net.bytebuddy.utility.RandomString;

@Service
public class Adminservice {
	@Autowired
	private AdminDao adminDao;
	@Autowired
	private ReservationApiMailService mailService;
	@Autowired
	private LinkGeneratorService linkGeneratorService;
	@Autowired
	private EmailConfiguration emailConfiguration;

	/**
	 * This method will accept {@link AdminRequest} and maps it to {@link Admin} and
	 * by calling mapToAdmin(AdminRequest).
	 * 
	 * @param adminRequest
	 * @return {@link ResponseEntity}
	 * @throws ConstraintViolationException if any constraint is violated
	 */

	public ResponseEntity<ResponseStructure<AdminResponse>> saveAdmin(AdminRequest adminRequest,
			HttpServletRequest request) {
		ResponseStructure<AdminResponse> structure = new ResponseStructure<>();
		Admin admin = mapToAdmin(adminRequest);
		admin.setStatus(AccountStatus.IN_ACTIVE.toString());
		admin = adminDao.saveAdmin(admin);
		String activation_link = linkGeneratorService.getActivationLink(admin, request);
		emailConfiguration.setSubject("Activate Your Account");
		emailConfiguration.setText(
				"Dear Admin Please Activate Your Account by clicking on the following link:" + activation_link);
		emailConfiguration.setToAddress(admin.getEmail());
		structure.setMessage(mailService.sendMail(emailConfiguration));
		structure.setData(mapToAdminResponse(admin));
		structure.setStatusCode(HttpStatus.CREATED.value());
		return ResponseEntity.status(HttpStatus.CREATED).body(structure);

	}


	/**
	 * This method will accept AdminRequest(DTO) and Admin Id and update the Admin
	 * in the Database if identifier is valid.
	 * 
	 * @param adminRequest
	 * @param id
	 * @return {@link ResponseEntity}
	 * @throws {@code AdminNotFoundException} if Identifier is Invalid
	 */
	public ResponseEntity<ResponseStructure<AdminResponse>> update(AdminRequest adminRequest, int id) {
		Optional<Admin> recAdmin = adminDao.findById(id);
		ResponseStructure<AdminResponse> structure = new ResponseStructure<>();
		if (recAdmin.isPresent()) {
			Admin dbAdmin =recAdmin.get();
			dbAdmin.setName(adminRequest.getName());
			dbAdmin.setPhone(adminRequest.getPhone());
			dbAdmin.setEmail(adminRequest.getEmail());
			dbAdmin.setGst_number(adminRequest.getGst_number());
			dbAdmin.setTravels_name(adminRequest.getTravels_name());
			dbAdmin.setPassword(adminRequest.getPassword());
			structure.setData(mapToAdminResponse(adminDao.saveAdmin(dbAdmin)));
			structure.setMessage("Admin Updated");
			structure.setStatusCode(HttpStatus.ACCEPTED.value());
			return ResponseEntity.status(HttpStatus.ACCEPTED).body(structure);
		}
		throw new AdminNotFoundException("Cannot Update Admin as Id is Invalid");
	}
	/***
	 * This method will accept Admin Id and give the Response back
	 * in the Database if identifier is vaild
	 * @param id
	 * @return{@Link ResponseEntity}
	 * @throws {@code AdminNotFoundException} if Identifier is Invalid
	 */
	public ResponseEntity<ResponseStructure<AdminResponse>> findById(int id) {
		ResponseStructure<AdminResponse> structure = new ResponseStructure<>();
		Optional<Admin> dbAdmin = adminDao.findById(id);
		if (dbAdmin.isPresent()) {
			structure.setData(mapToAdminResponse(dbAdmin.get()));
			structure.setMessage("Admin Found");
			structure.setStatusCode(HttpStatus.OK.value());
			return ResponseEntity.status(HttpStatus.OK).body(structure);
		}
		throw new AdminNotFoundException("Invalid Admin Id");
	}

	/***
	 * This method will accept Admin phone and Password and verify with the data
	 * @param phone
	 * @param password
	 * @return{@Link ResponseEntity}
	 * throws{@code AdminNotFoundException} if identifer is invalid
	 */
	public ResponseEntity<ResponseStructure<AdminResponse>> verify(long phone, String password) {
		ResponseStructure<AdminResponse> structure = new ResponseStructure<>();
		Optional<Admin> dbAdmin = adminDao.verify(phone, password);
		if (dbAdmin.isPresent()) {
			Admin admin=dbAdmin.get();
			if (admin.getStatus().equals(AccountStatus.IN_ACTIVE.toString()))
				throw new IllegalStateException("Please Activate Your Account before You Sign In");

			structure.setData(mapToAdminResponse(dbAdmin.get()));
			structure.setMessage("Verification Succesfull");
			structure.setStatusCode(HttpStatus.OK.value());
			return ResponseEntity.status(HttpStatus.OK).body(structure);
		}
		throw new AdminNotFoundException("Invalid Phone Number or Password");
	}
	/***
	 * This method will accept Admin email and Password and verify with the data
	 * @param email
	 * @param password
	 * @return{@Link ResponseEntity}
	 * throws{@code AdminNotFoundException} if identifer is invalid
	 */

	public ResponseEntity<ResponseStructure<AdminResponse>> verify(String email, String password) {
		ResponseStructure<AdminResponse> structure = new ResponseStructure<>();
		Optional<Admin> dbAdmin = adminDao.verify(email, password);
		if (dbAdmin.isPresent()) {
			Admin admin=dbAdmin.get();
			if (admin.getStatus().equals(AccountStatus.IN_ACTIVE.toString()))
				throw new IllegalStateException("Please Activate Your Account before You Sign In");

			structure.setData(mapToAdminResponse(dbAdmin.get()));
			structure.setMessage("Verification Succesfull");
			structure.setStatusCode(HttpStatus.OK.value());
			return ResponseEntity.status(HttpStatus.OK).body(structure);
		}
		throw new AdminNotFoundException("Invalid Email Id or Password");
	}
	/***
	 * This method will accept admin id to delete the data 
	 * @param id
	 * @return{@Link ResponseEntity}
	 * throws{@code AdminNotFoundException} if identifer is invalid
	 */
	public ResponseEntity<ResponseStructure<String>> delete(int id) {
		ResponseStructure<String> structure = new ResponseStructure<>();
		Optional<Admin> dbAdmin = adminDao.findById(id);
		if (dbAdmin.isPresent()) {
			adminDao.delete(id);
			structure.setData("Admin Found");
			structure.setMessage("Admin deleted");
			structure.setStatusCode(HttpStatus.OK.value());
			return ResponseEntity.status(HttpStatus.OK).body(structure);
		}
		throw new AdminNotFoundException("Cannot delete Admin as Id is Invalid");
	}

	   private Admin mapToAdmin(AdminRequest adminRequest) {
		   return Admin.builder().email(adminRequest.getEmail()).name(adminRequest.getName()).phone(adminRequest.getPhone())
				   .gst_number(adminRequest.getGst_number()).travels_name(adminRequest.getTravels_name()).password(adminRequest.getPassword()).build();
	   }
	   private AdminResponse mapToAdminResponse(Admin admin) {
		   return AdminResponse.builder().email(admin.getEmail()).name(admin.getName()).phone(admin.getPhone())
				   .gst_number(admin.getGst_number()).travels_name(admin.getTravels_name()).password(admin.getPassword()).id(admin.getId()).build();
	   }

	   public String activate(String token) {
			Optional<Admin> recAdmin = adminDao.findByToken(token);
			if (recAdmin.isEmpty())
				throw new AdminNotFoundException("Invalid Token");
			Admin dbAdmin = recAdmin.get();
			dbAdmin.setStatus("ACTIVE");
			dbAdmin.setToken(null);
			adminDao.saveAdmin(dbAdmin);
			return "Your Account has been activated";
		}
	   public String forgotPassword(String email,HttpServletRequest request) {
		   Optional<Admin> recAdmin=adminDao.findByEmail(email);
		   if(recAdmin.isEmpty()) 
			   throw new AdminNotFoundException("Invalid email id");
		   
		   Admin admin=recAdmin.get();
		   String resetPasswordLink=linkGeneratorService.getResetPasswordLink(admin, request);
		   emailConfiguration.setToAddress(email);
		   emailConfiguration.setText("please click on the following link to Reset your password "+resetPasswordLink);
		   emailConfiguration.setSubject("RESET YOUR PASSWORD");
		   mailService.sendMail(emailConfiguration);
		   return "Rest password link has been sent to entered mail id";
	   }
	   public AdminResponse verifyLink(String token) {
		   Optional<Admin> recAdmin=adminDao.findByToken(token);
		   if(recAdmin.isEmpty())
			   throw new AdminNotFoundException("Link has been expired or it is Invalid");
		   Admin dbAdmin=recAdmin.get();
		   dbAdmin.setToken(null);
		   adminDao.saveAdmin(dbAdmin);
		   return mapToAdminResponse(dbAdmin);
	   }
}
