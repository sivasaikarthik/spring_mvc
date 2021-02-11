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

	
	@RequestMapping(value="/index",method=RequestMethod.GET)
	public ModelAndView studentdetails(){
		ModelAndView model=new ModelAndView("index");
		return model;
	}
	@RequestMapping(value="/hello",method=RequestMethod.GET)
	public  ModelAndView student(){
		
		ModelAndView model=new ModelAndView("hello");
		return model;
	}
	
	
}
