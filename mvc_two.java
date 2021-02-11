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

	
	//2nd question
	
	
	@RequestMapping(value="/simple.html",method=RequestMethod.GET)
	public ModelAndView studentdetails(){
		ModelAndView model=new ModelAndView("simple");
		return model;
	}
	@RequestMapping(value="/simplesucess.html",method=RequestMethod.POST)
	public  ModelAndView student(@ModelAttribute("interest") simple s){
		
		ModelAndView model=new ModelAndView("simplesucess");
		return model;
	}
}
