export default function GetInputValue(class_name="reg_field")
{
    let val;

    try
    {
          val = document.getElementsByClassName(class_name);
          return val;
    }
    catch(e)
    {
        console.log(e);
    }

        }

GetInputValue()