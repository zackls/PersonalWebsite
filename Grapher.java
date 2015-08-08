import java.applet.Applet;
import java.security.PrivilegedAction;

import java.awt.image.BufferedImage;
import javax.script.Bindings;
import javax.script.ScriptContext;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import javax.swing.ImageIcon;
import javax.swing.JFrame;
import javax.swing.JLabel;

public class Grapher extends Applet
{
    //The following four numbers are the range you wish to view on
    static private float minX;
    static private float maxX;
    static private float minY;
    static private float maxY;
    //Higher accuracy means longer but more accurate picture generating
    static private float accuracy;
    //Higher tolerance means less precise drawing
    static private float tolerance = (float)1.0 / 600;
    static private String l;
    static private String r;
    static private ScriptEngineManager manager = new ScriptEngineManager();
    static private ScriptEngine engine = manager.getEngineByName("js");
    public void graph(String l, String r, float minX, float maxX, float minY, float maxY, float accuracy)
    {
        this.l = l;
        this.r = r;
        this.minX = minX;
        this.maxX = maxX;
        this.minY = minY;
        this.maxY = maxY;
        this.accuracy = accuracy;
        try
        {
            float X, Y;
            BufferedImage image = new BufferedImage(500, 500, BufferedImage.TYPE_INT_ARGB);
            for (X = 0; X < 500; X += 1.0 / accuracy)
            {
                for (Y = 0; Y < 500; Y += 1.0 / accuracy)
                {
                    if (areEqual((X / (float)500.0) * (maxX - minX) + minX,(Y / (float)500.0) * (maxY - minY) + minY))
                    {
                        image.setRGB((int)Math.floor(X), (int)Math.floor(Y), 0xFF000000);
                    }
                }
            }
            JFrame frame = new JFrame(l + " = " + r);
            frame.setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);
            frame.add(new JLabel(new ImageIcon(image)));
            frame.pack();
            frame.setVisible(true);
        }
        catch (ScriptException e)
        {
            //invalid input
        }
    }
    private static Boolean areEqual(float X, float Y) throws ScriptException
    {
        float upperLimit = L(X + ((maxX - minX) * tolerance), Y - ((maxY - minY) * tolerance));
        float lowerLimit = L(X - ((maxX - minX) * tolerance), Y + ((maxY - minY) * tolerance));
        float rightValue = R(X, Y);
        if (((lowerLimit <= rightValue) && (rightValue <= upperLimit)) || ((upperLimit <= rightValue) && (rightValue <= lowerLimit)))
        {
            return true;
        }
        return false;
    }
    /*The following two functions should be edited to accomodate the pre-programmed relationship you wish to view. Order doesn't matter. For
    example, to view the relationship X * Y = X * sin(Y), enter X * Y into the return for the first function and X * Math.sin(Y)
    into the return statement of the second function*/
    private static float L(float X, float Y) throws ScriptException
    {
        Bindings binds = engine.getBindings(ScriptContext.ENGINE_SCOPE);
        binds.put("X", X);
        binds.put("Y", Y);
        binds.put("x", X);
        binds.put("y", Y);
        return ((Double)engine.eval(l, binds)).floatValue();
    }
    private static float R(float X, float Y) throws ScriptException
    {
        Bindings binds = engine.getBindings(ScriptContext.ENGINE_SCOPE);
        binds.put("X", X);
        binds.put("Y", Y);
        binds.put("x", X);
        binds.put("y", Y);
        return ((Double)engine.eval(r, binds)).floatValue();
    }
    /*My favorite relationships:
    Math.cos(X * X + Y * Y) = Math.sin(Math.sqrt(Math.abs(X * Y))) [-50,50]
    Math.sin(X * Y) = Math.cos(Math.pow(X, 2) / Y) [-20,20]
    Math.cos(X / Y) * Math.sin(X - Y) = Math.sin(X / Y) [-20,20]
    Math.cos(X - Y + Y / X) = Math.sin(X + Y - Y / X) [-20,20]
    X / Math.cos(X - 2 * Y) = Y / Math.sin(2 * X + Y - Y / X) [-20,20]
    X / Math.cos(X - 2 * Y / X) = Y / Math.sin(2 * X + Y * Y / X)
    -X * Math.sin(X) = Y * Math.sin(Y)
    Y * X * Math.sin(Y) = Y * Math.cos(X * Y)*/


    
    // public String sayHello()
    // {
    //     return "Hello!";
    // }

    // private Class runner implements PrivilegedAction
    // {
    //     public Object run()
    //     {
    //         return this;
    //     }
    // }
}