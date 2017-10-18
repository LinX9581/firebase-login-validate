function validate(){
				/**
				 * validate 規則設定
				 */
				rules: {		
					name: {
						required: true,
						maxlength: 30
					},
					content:    {
						required:  true,
						maxlength: 1000
					}
				},
				/**
				 * validate 訊息設定
				 */
				messages: {
					name:     "沒輸入姓名或者名稱過長。",

					content:     {
						required:  "請輸入內容。",
						maxlength: jQuery.format("詢問內容請輸入 1000 字以内。") 
					},						
				}
			}