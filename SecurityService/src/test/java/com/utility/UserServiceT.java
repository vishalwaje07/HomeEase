package com.utility;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;


import com.utility.entity.User;
import com.utility.exceptions.AllException;
import com.utility.repository.UserRepository;
import com.utility.service.UserService;
import com.utility.valueobjects.CSignUp;

@SpringBootTest(classes= {UserServiceT.class})
public class UserServiceT {

@Mock	
private	UserRepository Urs;
	
@InjectMocks
private	 UserService Us;

public Optional<User> mydata;


private PasswordEncoder pe;
@Test
@Order(1)
public void findByUsername() {
	
	List<User> mydata=new ArrayList<User>();
	 
		mydata.add(new User(1,"vikas","patil","vikas@gmail.com",
				"1234678"
				,"supllier",true,false,true,false) );
		mydata.add(new User(1,"kunal","patil","vikas@gmail.com",
				"1234678"
				,"supllier",true,false,true,false) );
		
		String uname="vikas";
		
	
		
		when(Urs.findByUsername(uname)).thenReturn(mydata.get(0));
	       
        assertEquals(uname,Us.findByUsername(uname).getName());
		
		
}


/*
@Test
@Order(2)
public void Test_changePassword() {
	
	
	User myuser = new User(1,"vikas","patil","vikas@gmail.com",
			"1234678","supllier",true,false,true,false
			  );
	 myuser.setPassword(pe.encode(myuser.getPassword()));
	
	when(Urs.save(myuser)).thenReturn(myuser);
    
    assertEquals(myuser,Us.changePassword(myuser));
	
	
	/*comment line 67 
	
}


@Test
@Order(3)
public void test_savePassword() {
	
	

	User myuser = new User(1,"vikas","patil","vikas@gmail.com",
		"vikas","supllier",true,false,true,false
			  );
	User myuser1 = new User(1,"vikas","patil","vikas@gmail.com",
			"patil","supllier",true,false,true,false
				  );
	
	
	when(Urs.save(myuser)).thenReturn(myuser);
    
    assertEquals(myuser,Us.savePassword(myuser));
	
    myuser.setPassword(pe.encode(myuser1.getPassword()));
}

*/
@Test
@Order(2)
public void save() {		
	
	User myuser = new User(1,"vikas","patil","vikas@gmail.com",
			"vikas","supllier",true,false,true,false
				  );
	
	when(Urs.save(myuser)).thenReturn(myuser);
	assertEquals(myuser,  Us.save(myuser));
	
}
@Test
@Order(3)
public void findById() {
	
	List<User> mydata=new ArrayList<User>();
	 
	mydata.add(new User(1,"vikas","patil","vikas@gmail.com",
			"1234678"
			,"supllier",true,false,true,false) );
	mydata.add(new User(1,"kunal","patil","vikas@gmail.com",
			"1234678"
			,"supllier",true,false,true,false) );
	
	
	Optional<User> mydata1 = Optional.of(new User(1,"kunal","patil","vikas@gmail.com",
			"1234678"
			,"supllier",true,false,true,false));
	long uid=1;
	
	
	
	when(Urs.findById(uid)).thenReturn(mydata1);
       
    assertEquals(uid,Us.findById(uid).getId());
	
	
}
@Test
@Order(4)
public void getCustomersList() {
	
	List<User> mydata=new ArrayList<User>();
	 
	mydata.add(new User(1,"vikas","patil","vikas@gmail.com",
			"1234678"
			,"ROLE_CUSTOMER",true,false,true,false) );
	mydata.add(new User(1,"kunal","patil","vikas@gmail.com",
			"1234678"
			,"ROLE_CUSTOMER",true,false,true,false) );
	
	
	when(Urs.findAll()).thenReturn(mydata);
    
    assertEquals(mydata,Us.getCustomersList());
	
}

@Test
@Order(5)
public void getAdminList() {
	
	List<User> mydata=new ArrayList<User>();
	 
	mydata.add(new User(1,"vikas","patil","vikas@gmail.com",
			"1234678"
			,"ROLE_ADMIN",true,false,true,false) );
	mydata.add(new User(1,"kunal","patil","vikas@gmail.com",
			"1234678"
			,"ROLE_ADMIN",true,false,true,false) );
	
	
	when(Urs.findAll()).thenReturn(mydata);
    
    assertEquals(mydata,Us.getAdminList());
	
	

}

@Test
@Order(6)
public void test_editUser() {
	
	List<User> mydata=new ArrayList<User>();
	 
	mydata.add(new User(1,"vikas","patil","vikas@gmail.com",
			"1234678"
			,"ROLE_ADMIN",true,false,true,false) );
	mydata.add(new User(1,"kunal","patil","vikas@gmail.com",
			"1234678"
			,"ROLE_ADMIN",true,false,true,false) );
	
	
	when(Urs.findAll()).thenReturn(mydata);
    
    assertEquals(mydata,Us.getAdminList());
	
	

}
/*
@Test
@Order(7)
public void editUser() {

CSignUp siup = new CSignUp("vikas","patil vasati",
		413306,new Date(1997-02-12),123466545,"456646"
		,"vikas", 1478,1254,"pluber",true,false,true,true);

User myuser = new User(123466545,"vikas","patil","vikas@gmail.com",
		"vikas","supllier",true,false,true,false
			  );
User myuser1 = new User(123466545,"vikas","patil","vikas@gmail.com",
		"vikas","supllier",true,false,true,false
			  );

 when(Urs.findById(siup.getAadhaar()).get()).thenReturn(myuser);
 
 when( Urs.save(myuser)).thenReturn(myuser);
 assertEquals( myuser ,Us.editUser(siup));


}*/
}