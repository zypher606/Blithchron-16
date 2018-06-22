$(document).ready(function(){
	
	function min_register_forms(min_members){
		$('.modal-header h3').html("Registraion form");
		$('#simple_registration .modal-body').html("");
		$('#simple_registration .modal-body').html('<div class="input-group margin-bottom-20"><input size="60" maxlength="255" class="form-control" placeholder="Your Group Name" name="UserRegistration[fname]" id="group_name" type="text">                                    </div>');
//		$('#simple_registration .modal-body').load('registration/group_name.html');
		
		for (var i=1; i<=min_members; i++)
			{
				
				
				$('#simple_registration .modal-body').append("<h4>Member"+i+"</h4><div id='member"+i+"'> </div>");
				
				if (i==1)
					{				
						$('#simple_registration .modal-body #member'+ i).load('registration/panache.html');
					}
				else{
					$('#simple_registration .modal-body #member'+ i).load('registration/mutiple_model.html');
				}
			}
		
		$('#simple_registration .modal-body').append("<div class='row' id='form_add_sub_bar'><div class='col-md-12'><button id='add_form' class='btn-u pull-right' type='button'>Add Members</button><button type='button' class='btn-u pull-right'  style='float:right; background:#E9523F; display:none;'>Delete Members</button></div></div><br>");
		
		$('#simple_registration .modal-body').append("<div class='row' ><div class='col-md-12'><button class='btn-u pull-left' type='submit' id='form_submit'>Register Now</button><button id='close' type='button' class='btn btn-default btn-u pull-right' data-dismiss='modal' style='float:right; background:#E9523F;'>Close</button></div></div><br><br><br>");
		

		
		
	}
	
	function submitdiv_insert()
	{
		$('#simple_registration .modal-body').append("<div class='row' ><div class='col-md-12'><button class='btn-u pull-left' type='submit' id='form_submit'>Register Now</button><button id='close' type='button' class='btn btn-default btn-u pull-right' data-dismiss='modal' style='float:right; background:#E9523F;'>Close</button></div></div><br><br><br>");
	}
	
	
	
	$(".event_registration_form").click(function(){
		
		var event_name= this.id;
		switch (event_name)
			{
				case ('panache_registration_form'):
					{
						var min_form=8,
							max_form=15;
						
						window.dbTableName= 'panache';
						
						break;
					}
					
				case ('synchronize_registration_form'):
					{
						var min_form=6,
							max_form=10;
						
						window.dbTableName= 'synchronize';
						
						break;
					}
					
				case ('tbdi_registration_form'):
					{
					
						var min_form=2,
							max_form=2;
						
						
						
						window.dbTableName= 'tbdi';
						
						break;
					}
					
				case ('antarangee_registration_form'):
					{
						var min_form=6,
							max_form=16;
						window.dbTableName= 'antarangee';
						break;
					}
				
				case ('adrenaline_registration_form'):
					{
						var min_form=1,
							max_form=3;
						window.dbTableName= 'adrenaline';
						break;
					}
					
				
			}
		
		min_register_forms(min_form);
		
		window.noOfPresentForms=min_form;
		
		if (dbTableName=='tbdi')
			{
				$('#add_form').prop('disabled', true);
				$('#add_form').addClass('disabled');
				$('#add_form').text('Cannot add more');			

			}
		
		$("#add_form").click(function(){
		
			
			var mytemp=noOfPresentForms+1;
			$("<h4>Member"+(mytemp)+"</h4><div id='member"+(mytemp)+"'> </div>").insertAfter('#simple_registration .modal-body #member'+noOfPresentForms);
				
			$('#simple_registration .modal-body #member'+ mytemp).load('registration/panache.html');
		
			
			
			
			noOfPresentForms++;
			
			if (noOfPresentForms>=max_form)
			{
				$('#add_form').prop('disabled', true);
				$('#add_form').addClass('disabled');
				$('#add_form').text('Cannot add more');			

			}
			
		});
		
		
		
		
		$("#form_submit").click(function(){
		
			var group_name = $("#group_name").val();
			
			
			for (i=1; i<=noOfPresentForms; i++)
				{
					var member_path="#simple_registration .modal-body #member"+i;
					
					var f_name = $(member_path+" #UserRegistration_fname").val(),
						l_name = $(member_path+" #UserRegistration_lname").val(),
						email = $(member_path+" #UserRegistration_email").val(),
					 	c_number = $(member_path+" #UserRegistration_contactnumber").val(),
					 	college_name = $(member_path+" #UserRegistration_address").val();
					
					
					$.ajax({
						url: 'registration/event_register.php',
						data:'table_name='+dbTableName+'&group_name='+group_name+'&first_name='+f_name+'&last_name='+ l_name+'&email='+email+'&contact_no='+c_number+'&college_name='+college_name,
						type: "POST",
						success:function(data){
							$('.modal-header h3').html("Registered successfully");
							$('#simple_registration .modal-body').html(' ');
											  
											  }
					});
					
				}
			
		});
		
		
		
	});
	
	
	//Function for single events
	
	
	
	$(".single_event_registration").click(function(){
		
		var event_name= this.id;
		
		$('#simple_registration .modal-body').html("");
		
		$('#simple_registration .modal-body').append("<div id='member1'></div>");
		
		$('#simple_registration .modal-body').append("<div class='row' ><div class='col-md-12'><button class='btn-u pull-left' type='submit' id='form_submit'>Register Now</button><button id='close' type='button' class='btn btn-default btn-u pull-right' data-dismiss='modal' style='float:right; background:#E9523F;'>Close</button></div></div><br><br><br>");
		
		$('#simple_registration .modal-body #member1').load('registration/single_form.html');
		
		
	
		
		switch (event_name)
			{
				case ('euphony_registration_form'):
					{
						var header_message='Euphony';
						window.dbTableName= 'euphony';
						break;
					}
					
				case ('jobless_registration_form'):
					{
						var header_message='Jobless';
						window.dbTableName= 'jobless';
						break;
					}
				
			}
		
		$('#simple_registration .modal-title').html("Register for " + header_message);
		
		
		
		$("#form_submit").click(function(){
			
	
			var member_path="#simple_registration .modal-body #member1";
						
			var f_name = $(member_path+" #UserRegistration_fname").val(),
				l_name = $(member_path+" #UserRegistration_lname").val(),
				email = $(member_path+" #UserRegistration_email").val(),
				c_number = $(member_path+" #UserRegistration_contactnumber").val(),
				college_name = $(member_path+" #UserRegistration_address").val();
		
					
			$.ajax({
				url: 'registration/single_event.php',				 
				data:'table_name='+dbTableName+'&first_name='+f_name+'&last_name='+ l_name+'&email='+email+'&contact_no='+c_number+'&college_name='+college_name,
				type: "POST",
				success:function(data){
					$('.modal-header h3').html("Registered successfully");
					$('#simple_registration .modal-body').html(' ');
											  
											  }
					});
					
				
							
		});
		
		
		
	});
	
	
	
	//MMB registration form
	
	
	$(".mmb_registration").click(function(){
		
		var event_name= this.id;
		
		$('#simple_registration .modal-body').html("");
		$('#simple_registration .modal-body').append("<div id='member1'></div>");
		
		$('#simple_registration .modal-body').append("<div class='row' ><div class='col-md-12'><button class='btn-u pull-left' type='submit' id='form_submit'>Register Now</button><button id='close' type='button' class='btn btn-default btn-u pull-right' data-dismiss='modal' style='float:right; background:#E9523F;'>Close</button></div></div><br><br><br>");
		
		$('#simple_registration .modal-body #member1').load('registration/mmb_form.html');
		
		
	
		
		switch (event_name)
			{
				case ('mmb_registration_form'):
					{
						var header_message='MMB';
						window.dbTableName= 'mmb';
						break;
					}
			}
		
		$('#simple_registration .modal-title').html("Register for " + header_message);
		
		
		
		$("#form_submit").click(function(){
			
	
			var member_path="#simple_registration .modal-body #member1";
						
			var f_name = $(member_path+" #UserRegistration_fname").val(),
				l_name = $(member_path+" #UserRegistration_lname").val(),
				age = $(member_path+" #UserRegistration_age").val(),
				email = $(member_path+" #UserRegistration_email").val(),
				c_number = $(member_path+" #UserRegistration_contactnumber").val(),
				college_name = $(member_path+" #UserRegistration_address").val(),
				sex = $(member_path+" #UserRegistration_sex").val(),
				special_talent = $(member_path+" #UserRegistration_specialtalent").val(),
				q1 = $(member_path+" #q1").val(),
				q2 = $(member_path+" #q2").val(),
				q3 = $(member_path+" #q3").val(),
				q4 = $(member_path+" #q4").val(),
				q5 = $(member_path+" #q5").val(),
				q6 = $(member_path+" #q6").val(),
				q7 = $(member_path+" #q7").val(),
				q8 = $(member_path+" #q8").val(),
				q9 = $(member_path+" #q9").val(),
				q10 = $(member_path+" #q10").val(),
				q11 = $(member_path+" #q11").val();
			
			
		
					
			$.ajax({
				url: 'registration/mmb_register.php',				 
				data:'table_name='+dbTableName+'&first_name='+f_name+'&last_name='+ l_name+'&age='+age+'&email='+email+'&contact_no='+c_number+'&college_name='+college_name+'&sex='+sex+'&special_talent=' + special_talent + '&q1='+q1+ '&q2='+q2+'&q3='+q3+'&q4='+q4+'&q5='+q5+'&q6='+q6+'&q7='+q7+'&q8='+q8+'&q9='+q9+'&q10='+q10+'&q11='+q11,
				type: "POST",
				success:function(data){
					$('.modal-header h3').html("Registered successfully");
					$('#simple_registration .modal-body').html(' ');
											  
											  }
					});
					
				
							
		});
		
		
		
	});
	
	
	
	
	
	
	
	
	
	
	
	
});