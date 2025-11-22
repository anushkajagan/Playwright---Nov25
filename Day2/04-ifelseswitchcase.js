function getBrowser(browsername)
{

    //let browsername  = "edge";
    if (browsername == "chrome")
    {
        console.log(`Browser name is ${browsername}`);  
    }
    else if (browsername == "edge")
    {
        
        console.log(`Browser name is ${browsername}`);  
    }
        else {
        console.log(`Browser name is not supported`);  
    }

}
//let browsername = "test";
getBrowser("test");

function getBrowserSwitch(newbrowser)
{
    switch (newbrowser) {
        case "chrome":
            console.log("The browser supported is :" +newbrowser);
            break;
        case "edge":
            console.log("The browser supported is :" +newbrowser);
            break;
        case "firefox":
            console.log("The browser supported is :" +newbrowser);
            break;
        default:
            console.log("The browser is not supported");
            break;
    }
}

//let newbrowser = "firefox";
//getBrowserSwitch(newbrowser);


