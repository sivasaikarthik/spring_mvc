package mvc.mydemo1.controller;

import java.io.IOException;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController {

	
	//3 question
	@RequestMapping(value="/login.html",method=RequestMethod.GET)
	public ModelAndView studentdetails(){
		ModelAndView model=new ModelAndView("login");
		return model;
	}
	@RequestMapping(value="/sucess",method=RequestMethod.POST)
	public  ModelAndView student(@ModelAttribute("login") login s){
		ModelAndView model;
		if(s.getUsername().equalsIgnoreCase("k")&& s.getPassword().equalsIgnoreCase("k"))
		{
			 model=new ModelAndView("sucesss");
			
		}
		
		else
		{
			 model=new ModelAndView("error");
		}
		System.out.println(s.getUsername()+"  "+s.getPassword());
		return model;
	}
	
}
