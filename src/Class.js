class App {

   constructor(){
      console.log("App::constructor");
   }

   init(){
      console.log("App::init");
   }

}

class ChildApp extends App{
   constructor(){
       super();
       console.log("ChildApp::constructor");
       this.init();
   } 

   init(){
       console.log("ChildApp::init");
   }
}

module.exports = ChildApp;

