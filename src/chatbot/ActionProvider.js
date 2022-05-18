
import a from "../api/language"
import api from "../api/retriver"

const text1 = [
  "Steps to place an order online or offline stores",
  "Finding nearest Lenskart Store in your surroundings",
  "Cancellation of Ordered Items with order number",
  "Making an appointment for a home eye test and try-on",
  "Select different input and display language",
]


class ActionProvider  {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.ids = ["100011","100012","100013","100014","100015"]
      this.order_id = ""
    }


      get_translation = async (message,language) => {
        const response = await api.get("/translater",{
          params : {
          msg: message,
          lang: language
        }})
        return response
      };

    start_again = () => {
      this.get_translation("Hello, I'm Sara. How may I help you today ? Do you need help with: ",a.getLanguage()).then((response) => {
        const message = this.createChatBotMessage(response.data, {widget: "options",});
        this.addMessageToState(message)
      })
    };


    /*------------------------------------------------Options-----------------------------------------------*/ 
    
    starting_option_1 = () => {
      this.get_translation(text1[0],a.getLanguage()).then((response) => {
        const message = this.createChatBotMessage(response.data, {widget: "options1",});
        this.addMessageToState(message)
      })
    };

    starting_option_2 = () => {
      this.get_translation("Please enter your area pincode number",a.getLanguage()).then((response) => {
        const message = this.createChatBotMessage(response.data);
      this.addMessageToState(message);
      })
    };

    starting_option_3 = () => {
      this.get_translation("Please enter the order-id for your order",a.getLanguage()).then((response) => {
        const message = this.createChatBotMessage(response.data);
      this.addMessageToState(message);
      })
    };

    starting_option_4 = () => {
      this.get_translation(text1[3],a.getLanguage()).then((response) => {
        const message = this.createChatBotMessage(response.data, {widget: "options4",});
        this.addMessageToState(message)
      })
    };

    starting_option_5 = () => {
      this.get_translation(text1[4],a.getLanguage()).then((response) => {
        const message = this.createChatBotMessage(response.data, {widget: "options5",});
        this.addMessageToState(message)
      })
    };

   /*------------------------------------------------Option 1-----------------------------------------------*/ 

    place_an_order_online = () => {
      this.get_translation("Please visit the website lenskart.com for details",a.getLanguage()).then((response) => {
        const message = this.createChatBotMessage(response.data);
        this.addMessageToState(message)
      })
    };

    place_an_order_offline = () => {
      this.get_translation('Please contact our nearby store and make an order or please contact to '+
      'our customer care 2014587400 or visit store.lenskart.com for details.',a.getLanguage()).then((response) => {
        const message = this.createChatBotMessage(response.data);
        this.addMessageToState(message)
      })
    };

     /*------------------------------------------------Option 2-----------------------------------------------*/ 

     locate_store = (lowercase) => {
      const get_translation = async (message,language) => {
        const response = await api.get("/address",{
          params : {
            pincode: message,
          lang: language
        }})
        return response
      };
      get_translation(lowercase,a.getLanguage()).then((response) => {
        const message = this.createChatBotMessage(response.data)
        this.addMessageToState(message)
      })
    } 

    /*------------------------------------------------Option 3-----------------------------------------------*/
    
    cancel_order = (lowercase) => {
      if (this.ids.includes(lowercase)) {
        this.order_id = lowercase
        this.get_translation("Do you want to cancel the order , type yes or no",a.getLanguage()).then((response) => {
          const message = this.createChatBotMessage(response.data,{widget: "options3",})
          this.addMessageToState(message)
        })
      }
      else{
        const message = this.createChatBotMessage("Please enter the correct order-id");
          this.addMessageToState(message);
      }
    }
    cancel_order_yes = () => {
      var index = this.ids.indexOf(this.order_id)
      delete this.ids[index];
      this.get_translation("Order deleted Sucessfully",a.getLanguage()).then((response) => {
        const message = this.createChatBotMessage(response.data)
        this.addMessageToState(message)
      })
    }

    cancel_order_no = () => {
      this.get_translation("Cancellation Process terminated Sucessfully",a.getLanguage()).then((response) => {
        const message = this.createChatBotMessage(response.data)
        this.addMessageToState(message)
      })
    }

    /*------------------------------------------------Option 4-----------------------------------------------*/ 

    home_eye_test = () => {
      this.get_translation("Please contact our Customer service centre to get an appointment - contact 180-100-1111",a.getLanguage()).then((response) => {
        const message = this.createChatBotMessage(response.data)
        this.addMessageToState(message)
      })
    }

    try_on = () => {
      this.get_translation("This feature is available in android or the ios app , please download the app to see the feature",a.getLanguage()).then((response) => {
        const message = this.createChatBotMessage(response.data)
        this.addMessageToState(message)
      })
    }

    /*------------------------------------------------Option 5-----------------------------------------------*/ 

    language_option_1 = () => {
      a.setLanguage(1);
      console.log(a.getLanguage())
      const message = this.createChatBotMessage("Language changed to telugu")
      this.addMessageToState(message)
    }

    language_option_2 = () => {
      const message = this.createChatBotMessage("Language changed to hindi")
      a.setLanguage(2);
      console.log(a.getLanguage())
      this.addMessageToState(message)
      
    }

    language_option_3 = () => {
      a.setLanguage(3);
      console.log(a.getLanguage())
      const message = this.createChatBotMessage("Language changed to english")
      this.addMessageToState(message)
    }

    language_option_4 = () => {
      a.setLanguage(4);
      console.log(a.getLanguage())
      const message = this.createChatBotMessage("Language changed to tamil")
      this.addMessageToState(message)
    }

    language_option_5 = () => {
      a.setLanguage(5);
      console.log(a.getLanguage())
      const message = this.createChatBotMessage("Language changed to kannada")
      this.addMessageToState(message)
    }

    addMessageToState = (message) => {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    };
  }
  
  export default ActionProvider;