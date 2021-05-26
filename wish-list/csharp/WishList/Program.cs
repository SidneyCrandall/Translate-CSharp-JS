// To run the program 
using System;
// in order to use List in the c# program 
using System.Collections.Generic;
// Have a statement that indictates where the code starts
Console.WriteLine("My wishes...");
// List my wishes for the program to run (properties)
List<string> Wishes = new List<string> {
        "An original eight track of William Shatner's 'Lucy in the Sky with Diamonds'",
    "The ability to think of interesting wishes on short notice",
    "A washtub of Skittles",
    "World peace, but not the kind of world peace where all the humans are removed from existence",
    "A TV that is NOT internet-capable",
    "The ability to fly, but, like, really fast...not just, like, how fast I can walk, but, like, fast, you know?"
};
// the method in order to list all the wishes
foreach ( string wish in Wishes )
{
    Console.WriteLine(wish);
}