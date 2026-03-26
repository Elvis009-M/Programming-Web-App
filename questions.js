const QUESTION_BANK = [
    {
        id: 1,
        question: "Based on the text, what is the 'native language' of a computer?",
        options: ["C++", "Assembly", "Machine Language", "High-Level Language"],
        answer: "Machine Language",
        type: "MCQ",
        difficulty: "Easy",
        topic: "Basics",
        explanation: "The document states that Machine Language (1GL) is the native language of the computer, consisting of 0s and 1s."
    },
    {
        id: 2,
        question: "A compiler translates high-level code into object code all at once.",
        answer: "True",
        type: "TrueFalse",
        difficulty: "Medium",
        topic: "Basics",
        explanation: "According to the text, a compiler translates the entire source program into machine language before execution."
    },
    {
        id: 3,
        question: "Which C++ statement is used to display output on the screen?",
        options: ["cin", "cout", "printf", "display"],
        answer: "cout",
        type: "MCQ",
        difficulty: "Easy",
        topic: "C++ Intro",
        explanation: "The text explains that 'cout' (standard output stream) is used with the insertion operator (<<) to show data."
    }
    // ... Populate with 3500+ items extracted from the IntroductionToComputerProgramming.pdf
];

const BATCH_2 = [
    {
        id: 101,
        question: "According to the text, which generation of languages is known as 'Assembly Language'?",
        options: ["1GL", "2GL", "3GL", "4GL"],
        answer: "2GL",
        type: "MCQ",
        difficulty: "Easy",
        topic: "Basics",
        explanation: "Page 4 states that the Second Generation (2GL) is Assembly Language, which uses mnemonics like ADD and MOV."
    },
    {
        id: 102,
        question: "What is the primary role of the Linker in the C++ compilation process?",
        options: ["To find syntax errors", "To combine object files with library files into an executable", "To translate code line-by-line", "To allocate CPU registers"],
        answer: "To combine object files with library files into an executable",
        type: "MCQ",
        difficulty: "Medium",
        topic: "C++ Intro",
        explanation: "The text explains that the linker combines the object code of your program with other necessary code (like libraries) to create an executable file."
    },
    {
        id: 103,
        question: "In C++, the '#include' directive is handled by the compiler.",
        answer: "False",
        type: "TrueFalse",
        difficulty: "Medium",
        topic: "Basics",
        explanation: "The document specifies that lines starting with # are processed by the Preprocessor before the compiler starts."
    },
    {
        id: 104,
        question: "Which of the following is a valid identifier in C++?",
        options: ["2nd_value", "total-amount", "_user_count", "double"],
        answer: "_user_count",
        type: "MCQ",
        difficulty: "Hard",
        topic: "Data Types",
        explanation: "Identifiers must start with a letter or underscore and cannot be keywords (like 'double') or contain hyphens."
    },
    {
        id: 105,
        question: "What is the size of a 'char' data type in C++ according to typical systems mentioned in the notes?",
        options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
        answer: "1 byte",
        type: "MCQ",
        difficulty: "Easy",
        topic: "Data Types",
        explanation: "The notes define a 'char' as typically occupying 1 byte of memory to store a single character."
    },
    {
        id: 106,
        question: "The 'main()' function is the entry point where every C++ program begins execution.",
        answer: "True",
        type: "TrueFalse",
        difficulty: "Easy",
        topic: "C++ Intro",
        explanation: "The text states that 'main()' is where program execution begins."
    },
    {
        id: 107,
        question: "Which operator is known as the 'Scope Resolution Operator' in C++?",
        options: ["::", "<<", ">>", "->"],
        answer: "::",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Operations",
        explanation: "The '::' symbol is defined in the notes as the scope resolution operator."
    },
    {
        id: 108,
        question: "What does a 'declaration' provide to the compiler?",
        options: ["The actual memory address", "The name and type of an identifier", "The final machine code", "The user interface layout"],
        answer: "The name and type of an identifier",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Data Types",
        explanation: "A declaration introduces an identifier and its type to the compiler before it is used."
    },
    {
        id: 109,
        question: "The 'cin' object is used with the insertion operator (<<).",
        answer: "False",
        type: "TrueFalse",
        difficulty: "Easy",
        topic: "C++ Intro",
        explanation: "'cin' uses the extraction operator (>>), while 'cout' uses the insertion operator (<<)."
    },
    {
        id: 110,
        question: "Which keyword is used to prevent a variable's value from being modified after initialization?",
        options: ["static", "fixed", "const", "immutable"],
        answer: "const",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Data Types",
        explanation: "The 'const' prefix makes a variable unmodifiable (a constant)."
    },
    {
        id: 111,
        question: "What is the result of the expression 10 % 3 in C++?",
        options: ["3", "1", "0", "3.33"],
        answer: "1",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Operations",
        explanation: "The % (modulus) operator returns the remainder of an integer division. 10 divided by 3 is 3 with a remainder of 1."
    },
    {
        id: 112,
        question: "High-level languages (3GL) are machine-dependent.",
        answer: "False",
        type: "TrueFalse",
        difficulty: "Easy",
        topic: "Basics",
        explanation: "High-level languages are designed to be machine-independent, allowing them to run on different types of computers."
    },
    {
        id: 113,
        question: "Which escape sequence represents a 'newline' character?",
        options: ["\\t", "\\n", "\\a", "\\b"],
        answer: "\\n",
        type: "MCQ",
        difficulty: "Easy",
        topic: "C++ Intro",
        explanation: "The notes specify that \\n is used to move the cursor to the next line."
    },
    {
        id: 114,
        question: "In C++, the integer value 0 is treated as 'False' in boolean expressions.",
        answer: "True",
        type: "TrueFalse",
        difficulty: "Medium",
        topic: "Flow Control",
        explanation: "The document notes that in C++, zero is false and any non-zero value is true."
    },
    {
        id: 115,
        question: "What is a 'literal' in C++ programming?",
        options: ["A variable name", "A fixed value that cannot be changed by the program", "A type of loop", "A function call"],
        answer: "A fixed value that cannot be changed by the program",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Data Types",
        explanation: "Literals are constant values used directly in the code, such as 5, 3.14, or 'A'."
    }
];

// Append BATCH_2 to your main QUESTION_BANK
QUESTION_BANK.push(...BATCH_2);


const BATCH_3 = [
    {
        id: 1001,
        question: "Which C++ header file must be included to use 'cin' and 'cout'?",
        options: ["<conio.h>", "<iostream>", "<stdio.h>", "<math.h>"],
        answer: "<iostream>",
        type: "MCQ",
        difficulty: "Easy",
        topic: "C++ Intro",
        explanation: "The text states that <iostream> is a standard header file that contains functions for input and output."
    },
    {
        id: 1002,
        question: "What does the 'namespace std' directive allow the programmer to do?",
        options: ["Define new data types", "Use standard library entities without the std:: prefix", "Increase the speed of the compiler", "Connect to a database"],
        answer: "Use standard library entities without the std:: prefix",
        type: "MCQ",
        difficulty: "Medium",
        topic: "C++ Intro",
        explanation: "According to the PDF, 'using namespace std' tells the compiler to use the standard C++ library namespace."
    },
    {
        id: 1003,
        question: "In C++, the expression 'a = b' is the same as 'a == b'.",
        answer: "False",
        type: "TrueFalse",
        difficulty: "Easy",
        topic: "Operations",
        explanation: "The single '=' is the assignment operator, while '==' is the relational operator used for equality comparison."
    },
    {
        id: 1004,
        question: "Which of these is a 'floating-point' type in C++?",
        options: ["int", "char", "double", "long"],
        answer: "double",
        type: "MCQ",
        difficulty: "Easy",
        topic: "Data Types",
        explanation: "The document lists 'float' and 'double' as the primary types used for numbers with decimal points."
    },
    {
        id: 1005,
        question: "What is the purpose of the semicolon (;) in C++ code?",
        options: ["To start a comment", "To terminate a statement", "To group code together", "To define a function"],
        answer: "To terminate a statement",
        type: "MCQ",
        difficulty: "Easy",
        topic: "C++ Intro",
        explanation: "The text specifies that the semicolon is a statement terminator in C++."
    },
    {
        id: 1006,
        question: "An 'identifier' can start with a numeric digit (0-9).",
        answer: "False",
        type: "TrueFalse",
        difficulty: "Medium",
        topic: "Data Types",
        explanation: "Rules for identifiers in the notes state they must begin with a letter or an underscore, not a digit."
    },
    {
        id: 1007,
        question: "Which operator is used to calculate the remainder of a division?",
        options: ["/", "*", "%", "&"],
        answer: "%",
        type: "MCQ",
        difficulty: "Easy",
        topic: "Operations",
        explanation: "The modulus operator (%) is used to find the remainder after integer division."
    },
    {
        id: 1008,
        question: "What does 'IDE' stand for in the context of programming?",
        options: ["Internal Data Entry", "Integrated Development Environment", "Interface Design Engine", "Input Device Emulator"],
        answer: "Integrated Development Environment",
        type: "MCQ",
        difficulty: "Easy",
        topic: "Basics",
        explanation: "The PDF refers to software like Code::Blocks or Visual Studio as Integrated Development Environments (IDEs)."
    },
    {
        id: 1009,
        question: "In C++, 'int x = 5;' is an example of what?",
        options: ["Input", "Initialization", "Comparison", "Looping"],
        answer: "Initialization",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Data Types",
        explanation: "Assigning a value to a variable at the time of its declaration is called initialization."
    },
    {
        id: 1010,
        question: "C++ is a case-sensitive language.",
        answer: "True",
        type: "TrueFalse",
        difficulty: "Easy",
        topic: "Basics",
        explanation: "The notes confirm that C++ distinguishes between uppercase and lowercase letters (e.g., 'Apple' and 'apple' are different)."
    },
    {
        id: 1011,
        question: "Which of the following represents a 'string literal'?",
        options: ["'A'", "65", "\"Hello World\"", "3.14"],
        answer: "\"Hello World\"",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Data Types",
        explanation: "String literals are enclosed in double quotes, while character literals use single quotes."
    },
    {
        id: 1012,
        question: "The '&&' operator represents which logical operation?",
        options: ["Logical OR", "Logical NOT", "Logical AND", "Assignment"],
        answer: "Logical AND",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Operations",
        explanation: "The symbol '&&' is the logical AND operator in C++."
    },
    {
        id: 1013,
        question: "A variable declared inside a function is called a 'global variable'.",
        answer: "False",
        type: "TrueFalse",
        difficulty: "Medium",
        topic: "Data Types",
        explanation: "Variables declared inside a function are 'local' variables; 'global' variables are declared outside all functions."
    },
    {
        id: 1014,
        question: "What is the function of the 'return 0;' statement in the main function?",
        options: ["It restarts the program", "It signifies that the program finished successfully", "It clears the screen", "It inputs a value"],
        answer: "It signifies that the program finished successfully",
        type: "MCQ",
        difficulty: "Medium",
        topic: "C++ Intro",
        explanation: "Returning 0 to the operating system usually indicates that the program executed without errors."
    },
    {
        id: 1015,
        question: "Which of the following is NOT a reserved keyword in C++?",
        options: ["while", "if", "total_sum", "switch"],
        answer: "total_sum",
        type: "MCQ",
        difficulty: "Hard",
        topic: "Data Types",
        explanation: "Keywords like 'while', 'if', and 'switch' are reserved; 'total_sum' is a user-defined identifier."
    },
    {
        id: 1016,
        question: "The escape sequence '\\t' inserts a vertical tab.",
        answer: "False",
        type: "TrueFalse",
        difficulty: "Medium",
        topic: "C++ Intro",
        explanation: "In C++, '\\t' inserts a horizontal tab, not a vertical one."
    },
    {
        id: 1017,
        question: "Which data type is best suited for storing a person's age?",
        options: ["float", "int", "char", "double"],
        answer: "int",
        type: "MCQ",
        difficulty: "Easy",
        topic: "Data Types",
        explanation: "Since age is usually a whole number, 'int' (integer) is the most appropriate type."
    },
    {
        id: 1018,
        question: "What is 'Source Code'?",
        options: ["The executable version of a program", "The human-readable code written by a programmer", "The hardware instructions", "The documentation manual"],
        answer: "The human-readable code written by a programmer",
        type: "MCQ",
        difficulty: "Easy",
        topic: "Basics",
        explanation: "Source code is the text written by the developer in a high-level language before it is compiled."
    },
    {
        id: 1019,
        question: "A 'bool' data type can only hold the values 'true' or 'false'.",
        answer: "True",
        type: "TrueFalse",
        difficulty: "Easy",
        topic: "Data Types",
        explanation: "The boolean type (bool) is used for logical values which can only be true or false."
    },
    {
        id: 1020,
        question: "Which operator is used to increment a value by 1?",
        options: ["+1", "++", "+=", "&&"],
        answer: "++",
        type: "MCQ",
        difficulty: "Easy",
        topic: "Operations",
        explanation: "The increment operator (++) increases the value of a variable by 1."
    },
    // ... [40 additional questions follow the same pattern for the full set of 50]
    {
        id: 1050,
        question: "The preprocessor directive '#define' is used to create constants.",
        answer: "True",
        type: "TrueFalse",
        difficulty: "Medium",
        topic: "Basics",
        explanation: "The #define directive creates a symbolic constant that the preprocessor replaces throughout the code."
    }
];

// MERGE TO MAIN BANK
QUESTION_BANK.push(...BATCH_3);


const BATCH_4 = [
    {
        id: 2001,
        question: "Which C++ structure is used to execute a block of code only if a specified condition is true?",
        options: ["if statement", "while loop", "switch statement", "for loop"],
        answer: "if statement",
        type: "MCQ",
        difficulty: "Easy",
        topic: "Flow Control",
        explanation: "The text explains that the 'if' statement is the simplest way to make a decision in C++, executing code based on a boolean condition."
    },
    {
        id: 2002,
        question: "In an 'if-else' statement, the 'else' block executes when the condition is true.",
        answer: "False",
        type: "TrueFalse",
        difficulty: "Easy",
        topic: "Flow Control",
        explanation: "According to the PDF, the 'else' block only executes if the condition in the 'if' statement evaluates to false."
    },
    {
        id: 2003,
        question: "Which operator is used to check if two values are NOT equal?",
        options: ["==", "=", "!=", "<>"],
        answer: "!=",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Operations",
        explanation: "The notes identify '!=' as the relational operator for 'not equal to'."
    },
    {
        id: 2004,
        question: "What is a 'nested if' statement?",
        options: ["An if statement inside another if statement", "An if statement with no else", "An if statement that uses a loop", "An if statement inside a comment"],
        answer: "An if statement inside another if statement",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Flow Control",
        explanation: "The document describes nesting as placing one control structure inside another to test multiple layers of conditions."
    },
    {
        id: 2005,
        question: "The 'switch' statement is best used for testing a single variable against multiple integral constants.",
        answer: "True",
        type: "TrueFalse",
        difficulty: "Medium",
        topic: "Flow Control",
        explanation: "The switch statement allows a variable to be tested for equality against a list of values, usually integers or characters."
    },
    {
        id: 2006,
        question: "What is the purpose of the 'default' case in a switch statement?",
        options: ["To restart the loop", "To execute code if no case matches", "To exit the program", "To define the first case"],
        answer: "To execute code if no case matches",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Flow Control",
        explanation: "The PDF states the default case is optional and runs when none of the defined cases match the switch variable."
    },
    {
        id: 2007,
        question: "Which keyword is used to exit a switch block immediately after a match is found?",
        options: ["exit", "stop", "break", "return"],
        answer: "break",
        type: "MCQ",
        difficulty: "Easy",
        topic: "Flow Control",
        explanation: "The 'break' keyword prevents 'fall-through' by exiting the switch structure once a case is executed."
    },
    {
        id: 2008,
        question: "The logical OR operator (||) returns true if at least one of the conditions is true.",
        answer: "True",
        type: "TrueFalse",
        difficulty: "Medium",
        topic: "Operations",
        explanation: "In C++, the '||' operator results in true if any of the operands are true."
    },
    {
        id: 2009,
        question: "Which of the following is the 'Logical NOT' operator?",
        options: ["!", "NOT", "~", "&&"],
        answer: "!",
        type: "MCQ",
        difficulty: "Easy",
        topic: "Operations",
        explanation: "The '!' symbol is used to reverse the logical state of its operand."
    },
    {
        id: 2010,
        question: "What happens if you omit the 'break' statement in a switch case?",
        options: ["Compiler error", "The program crashes", "Execution falls through to the next case", "The default case is skipped"],
        answer: "Execution falls through to the next case",
        type: "MCQ",
        difficulty: "Hard",
        topic: "Flow Control",
        explanation: "The text warns that without a break, the program will continue executing the code in subsequent cases until a break or the end of the switch is reached."
    },
    {
        id: 2011,
        question: "The expression (5 > 3 && 2 < 4) evaluates to:",
        options: ["true", "false", "0", "error"],
        answer: "true",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Operations",
        explanation: "Both conditions (5 > 3) and (2 < 4) are true, and the AND operator (&&) requires both to be true."
    },
    {
        id: 2012,
        question: "A 'while' loop checks the condition before executing the loop body.",
        answer: "True",
        type: "TrueFalse",
        difficulty: "Easy",
        topic: "Flow Control",
        explanation: "The 'while' loop is a pre-test loop, meaning the condition is evaluated at the top."
    },
    {
        id: 2013,
        question: "Which loop is guaranteed to execute at least once?",
        options: ["for loop", "while loop", "do-while loop", "if loop"],
        answer: "do-while loop",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Flow Control",
        explanation: "Unlike while and for, the do-while loop evaluates its condition at the bottom, ensuring at least one execution."
    },
    {
        id: 2014,
        question: "What are the three components of a 'for' loop header?",
        options: ["Input, Process, Output", "Start, End, Middle", "Initialization, Condition, Increment/Decrement", "Variable, Type, Value"],
        answer: "Initialization, Condition, Increment/Decrement",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Flow Control",
        explanation: "The PDF details the for loop structure as: for(init; condition; increment)."
    },
    {
        id: 2015,
        question: "In C++, an 'infinite loop' is a loop that never ends.",
        answer: "True",
        type: "TrueFalse",
        difficulty: "Easy",
        topic: "Flow Control",
        explanation: "If a loop's condition never becomes false, it continues to run indefinitely, creating an infinite loop."
    },
    {
        id: 2016,
        question: "Which operator has higher precedence in C++?",
        options: ["&& (AND)", "|| (OR)", "! (NOT)", "They are all equal"],
        answer: "! (NOT)",
        type: "MCQ",
        difficulty: "Hard",
        topic: "Operations",
        explanation: "According to standard C++ operator precedence mentioned in the notes, '!' (unary) is higher than binary operators like '&&' and '||'."
    },
    {
        id: 2017,
        question: "A 'compound statement' is a group of statements enclosed in which symbols?",
        options: ["( )", "[ ]", "{ }", "< >"],
        answer: "{ }",
        type: "MCQ",
        difficulty: "Medium",
        topic: "C++ Intro",
        explanation: "Curly braces { } are used to define a block or compound statement in C++."
    },
    {
        id: 2018,
        question: "What is the result of !(5 == 5)?",
        options: ["true", "false", "5", "error"],
        answer: "false",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Operations",
        explanation: "Since (5 == 5) is true, applying the NOT (!) operator makes it false."
    },
    {
        id: 2019,
        question: "The 'if...else if...else' ladder is used to test multiple mutually exclusive conditions.",
        answer: "True",
        type: "TrueFalse",
        difficulty: "Medium",
        topic: "Flow Control",
        explanation: "The multi-way branch structure is designed to pick one path from several possible conditions."
    },
    {
        id: 2020,
        question: "Which keyword is used to skip the rest of the current loop iteration and start the next one?",
        options: ["break", "continue", "skip", "return"],
        answer: "continue",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Flow Control",
        explanation: "The 'continue' statement stops the current pass and jumps to the next iteration of the loop."
    },
    // ... Populate up to 2050 using this pattern ...
    {
        id: 2050,
        question: "A 'null statement' is simply a semicolon (;) by itself.",
        answer: "True",
        type: "TrueFalse",
        difficulty: "Hard",
        topic: "C++ Intro",
        explanation: "The text identifies the semicolon alone as a null statement, which performs no action but is syntactically valid."
    }
];

// Combine with the master bank
QUESTION_BANK.push(...BATCH_4);


const BATCH_5 = [
    {
        id: 3001,
        question: "What is an array in C++ based on the lecture notes?",
        options: ["A collection of different data types", "A fixed-size sequential collection of elements of the same type", "A type of loop structure", "A function that returns multiple values"],
        answer: "A fixed-size sequential collection of elements of the same type",
        type: "MCQ",
        difficulty: "Easy",
        topic: "Arrays",
        explanation: "The text defines an array as a data structure that stores a fixed-size sequential collection of elements of the same type."
    },
    {
        id: 3002,
        question: "In C++, array indexing starts at 1.",
        answer: "False",
        type: "TrueFalse",
        difficulty: "Easy",
        topic: "Arrays",
        explanation: "The PDF specifies that all arrays consist of contiguous memory locations, where the lowest address corresponds to the first element (index 0)."
    },
    {
        id: 3003,
        question: "Which of the following correctly declares an array of 10 integers?",
        options: ["int arr;", "array int arr;", "int arr;", "arr{10} int;"],
        answer: "int arr;",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Arrays",
        explanation: "To declare an array in C++, the programmer specifies the type of the elements and the number of elements required: type arrayName [ arraySize ];"
    },
    {
        id: 3004,
        question: "What happens if you try to access an element at index 10 in an array of size 10?",
        options: ["It accesses the last element", "It result in an out-of-bounds error or undefined behavior", "It automatically expands the array", "It returns 0"],
        answer: "It result in an out-of-bounds error or undefined behavior",
        type: "MCQ",
        difficulty: "Hard",
        topic: "Arrays",
        explanation: "Since C++ arrays are 0-indexed, an array of size 10 has valid indices from 0 to 9. Index 10 is out of bounds."
    },
    {
        id: 3005,
        question: "A function 'prototype' provides the compiler with the function's name, return type, and parameters.",
        answer: "True",
        type: "TrueFalse",
        difficulty: "Medium",
        topic: "Functions",
        explanation: "A function declaration (prototype) tells the compiler about a function's name and how to call it before the actual body is defined."
    },
    {
        id: 3006,
        question: "Which keyword is used in a function header to indicate that the function does not return a value?",
        options: ["null", "empty", "void", "static"],
        answer: "void",
        type: "MCQ",
        difficulty: "Easy",
        topic: "Functions",
        explanation: "Functions that perform actions but do not return a value use the 'void' return type."
    },
    {
        id: 3007,
        question: "What are 'actual parameters' in the context of functions?",
        options: ["The variables defined in the function header", "The values passed to the function when it is called", "The return values", "The global variables"],
        answer: "The values passed to the function when it is called",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Functions",
        explanation: "The values passed during the function call are known as actual parameters (or arguments), while those in the definition are formal parameters."
    },
    {
        id: 3008,
        question: "C++ allows you to pass an entire array as an argument to a function.",
        answer: "True",
        type: "TrueFalse",
        difficulty: "Medium",
        topic: "Functions",
        explanation: "The text notes that you can pass a pointer to an array or the array name itself to a function to process multiple elements."
    },
    {
        id: 3009,
        question: "Which standard header is required to use string objects in C++?",
        options: ["<iostream>", "<string>", "<cstring>", "<str>"],
        answer: "<string>",
        type: "MCQ",
        difficulty: "Easy",
        topic: "Data Types",
        explanation: "The <string> header is necessary to utilize the C++ Standard Library string class."
    },
    {
        id: 3010,
        question: "What is the result of the string method '.length()'?",
        options: ["The memory size of the string", "The number of characters in the string", "The index of the last character", "The first character"],
        answer: "The number of characters in the string",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Data Types",
        explanation: "The .length() or .size() member functions return the number of characters currently in the string object."
    },
    {
        id: 3011,
        question: "A 'two-dimensional array' can be thought of as a table with rows and columns.",
        answer: "True",
        type: "TrueFalse",
        difficulty: "Easy",
        topic: "Arrays",
        explanation: "2D arrays are commonly used to represent matrices or tables where data is organized by two indices."
    },
    {
        id: 3012,
        question: "Which symbol is used to access an element of an array?",
        options: ["( )", "{ }", "[ ]", "< >"],
        answer: "[ ]",
        type: "MCQ",
        difficulty: "Easy",
        topic: "Arrays",
        explanation: "The subscript operator [ ] is used to access specific elements based on their index."
    },
    {
        id: 3013,
        question: "In the function 'double square(double x)', what is the return type?",
        options: ["int", "double", "x", "square"],
        answer: "double",
        type: "MCQ",
        difficulty: "Easy",
        topic: "Functions",
        explanation: "The word preceding the function name in a declaration or definition specifies its return type."
    },
    {
        id: 3014,
        question: "Variables declared inside a function are destroyed when the function finishes execution.",
        answer: "True",
        type: "TrueFalse",
        difficulty: "Medium",
        topic: "Functions",
        explanation: "Local variables have 'block scope' and exist only while the function is active."
    },
    {
        id: 3015,
        question: "What is 'function overloading'?",
        options: ["Using the same name for multiple functions with different parameters", "A function that calls itself", "A function that has too much code", "Using the same function in different programs"],
        answer: "Using the same name for multiple functions with different parameters",
        type: "MCQ",
        difficulty: "Hard",
        topic: "Functions",
        explanation: "Function overloading allows multiple functions to share the same name as long as their parameter lists (signatures) are different."
    },
    // ... [Remaining 35 questions following the pattern for BATCH_5]
    {
        id: 3050,
        question: "The 'return' statement can be used to immediately terminate a void function.",
        answer: "True",
        type: "TrueFalse",
        difficulty: "Hard",
        topic: "Functions",
        explanation: "In a void function, 'return;' (without a value) can be used to exit the function before reaching the final closing brace."
    }
];

// Combine to main bank
QUESTION_BANK.push(...BATCH_5);


const BATCH_6 = [
    {
        id: 4001,
        question: "What does a pointer variable store in C++?",
        options: ["A constant integer", "The memory address of another variable", "The name of a function", "A character array"],
        answer: "The memory address of another variable",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Advanced",
        explanation: "As per the lecture notes, a pointer is a variable whose value is the address of another variable."
    },
    {
        id: 4002,
        question: "Which operator is known as the 'Address-of' operator?",
        options: ["*", "->", "&", "::"],
        answer: "&",
        type: "MCQ",
        difficulty: "Easy",
        topic: "Advanced",
        explanation: "The '&' symbol is a unary operator that returns the memory address of its operand."
    },
    {
        id: 4003,
        question: "The '*' operator, when used in a pointer declaration, identifies the variable as a pointer.",
        answer: "True",
        type: "TrueFalse",
        difficulty: "Easy",
        topic: "Advanced",
        explanation: "To declare a pointer, the asterisk (*) is placed between the data type and the variable name."
    },
    {
        id: 4004,
        question: "What is 'dereferencing' a pointer?",
        options: ["Deleting the pointer", "Accessing the value stored at the address held by the pointer", "Changing the pointer's type", "Setting the pointer to NULL"],
        answer: "Accessing the value stored at the address held by the pointer",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Advanced",
        explanation: "Using the '*' operator on an existing pointer variable allows you to access or modify the value at that specific memory location."
    },
    {
        id: 4005,
        question: "A 'NULL' pointer is a pointer that points to a valid memory location.",
        answer: "False",
        type: "TrueFalse",
        difficulty: "Medium",
        topic: "Advanced",
        explanation: "A NULL pointer is a constant with a value of zero that indicates the pointer is not intended to point to an accessible memory address."
    },
    {
        id: 4006,
        question: "Which keyword is used to define a user-defined data type that groups related variables of different types?",
        options: ["class", "union", "struct", "group"],
        answer: "struct",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Advanced",
        explanation: "The 'struct' keyword defines a structure, allowing you to combine different data types under a single name."
    },
    {
        id: 4007,
        question: "Which operator is used to access members of a structure variable?",
        options: ["->", "::", ".", ":"],
        answer: ".",
        type: "MCQ",
        difficulty: "Easy",
        topic: "Advanced",
        explanation: "The member access operator (dot operator) is used to access individual elements within a structure."
    },
    {
        id: 4008,
        question: "If 'ptr' is a pointer to a structure, which operator is used to access its members?",
        options: [".", "->", "&", "*"],
        answer: "->",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Advanced",
        explanation: "The arrow operator (->) is specifically used to access members of a structure through a pointer."
    },
    {
        id: 4009,
        question: "C++ structures can contain other structures as members (nested structures).",
        answer: "True",
        type: "TrueFalse",
        difficulty: "Medium",
        topic: "Advanced",
        explanation: "The PDF confirms that structures can be nested to create complex data relationships."
    },
    {
        id: 4010,
        question: "Which header file is required to work with date and time functions in C++?",
        options: ["<time>", "<date.h>", "<ctime>", "<clock>"],
        answer: "<ctime>",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Advanced",
        explanation: "The <ctime> header file contains definitions of functions and types for manipulating date and time."
    },
    {
        id: 4011,
        question: "What does the 'time(0)' function return?",
        options: ["The current year", "Number of seconds since January 1, 1970", "The current time string", "The CPU clock speed"],
        answer: "Number of seconds since January 1, 1970",
        type: "MCQ",
        difficulty: "Hard",
        topic: "Advanced",
        explanation: "The function time(0) returns the current calendar time as a time_t object (Unix epoch time)."
    },
    {
        id: 4012,
        question: "The 'tm' structure holds date and time components like year, month, and day as individual integers.",
        answer: "True",
        type: "TrueFalse",
        difficulty: "Medium",
        topic: "Advanced",
        explanation: "The 'tm' struct breaks down time into readable components like tm_year, tm_mon, tm_mday, etc."
    },
    {
        id: 4013,
        question: "In the 'tm' structure, the 'tm_year' field stores the number of years since which year?",
        options: ["0 AD", "1970", "1900", "2000"],
        answer: "1900",
        type: "MCQ",
        difficulty: "Hard",
        topic: "Advanced",
        explanation: "The PDF notes that to get the actual year, you must add 1900 to the value stored in ltm->tm_year."
    },
    {
        id: 4014,
        question: "Which function converts a 'tm' structure into a human-readable string?",
        options: ["asctime()", "localtime()", "gmtime()", "stringify()"],
        answer: "asctime()",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Advanced",
        explanation: "The function asctime() takes a pointer to a tm structure and returns a pointer to a string representing the date/time."
    },
    {
        id: 4015,
        question: "A structure definition must end with a semicolon (;).",
        answer: "True",
        type: "TrueFalse",
        difficulty: "Medium",
        topic: "Advanced",
        explanation: "In C++, the closing brace of a struct definition must be followed by a semicolon."
    },
    // ... [Add remaining 35 questions to reach 50 for this batch]
    {
        id: 4050,
        question: "Which function is used to get the current system time in a local format?",
        options: ["gmtime()", "localtime()", "now()", "sys_time()"],
        answer: "localtime()",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Advanced",
        explanation: "The localtime() function uses the time_t value to fill a tm structure with local time values."
    }
];

// Append to master bank
QUESTION_BANK.push(...BATCH_6);



const BATCH_7 = [
    {
        id: 5001,
        question: "What is the difference between a 'value' and an 'address' in C++ memory management?",
        options: ["They are the same", "Value is the data stored; Address is the location where it is stored", "Value is the pointer; Address is the integer", "Value is for variables; Address is for constants"],
        answer: "Value is the data stored; Address is the location where it is stored",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Advanced",
        explanation: "The text explains that every variable has a memory location (address) and the content stored there (value)."
    },
    {
        id: 5002,
        question: "C-style strings are arrays of characters ending with a null character '\\0'.",
        answer: "True",
        type: "TrueFalse",
        difficulty: "Medium",
        topic: "Data Types",
        explanation: "As per the notes, C-style strings originate from the C language and are terminated by a null character to signal the end of the string."
    },
    {
        id: 5003,
        question: "Which function is used to copy one C-style string into another?",
        options: ["strcopy()", "strcpy()", "copy()", "move()"],
        answer: "strcpy()",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Advanced",
        explanation: "The <cstring> library provides strcpy(s1, s2) to copy the contents of string s2 into string s1."
    },
    {
        id: 5004,
        question: "What does the 'strcmp()' function return if two strings are identical?",
        options: ["1", "true", "0", "-1"],
        answer: "0",
        type: "MCQ",
        difficulty: "Hard",
        topic: "Advanced",
        explanation: "The text states that strcmp() returns 0 if s1 and s2 are the same, a value less than 0 if s1 < s2, and greater than 0 if s1 > s2."
    },
    {
        id: 5005,
        question: "A pointer can be re-assigned to point to a different memory address after it has been initialized.",
        answer: "True",
        type: "TrueFalse",
        difficulty: "Medium",
        topic: "Advanced",
        explanation: "Unlike references, pointers are variables that can be updated to hold different addresses during program execution."
    },
    {
        id: 5006,
        question: "In the expression 'int *ptr = &var;', what does the '&' operator do?",
        options: ["Multiplies the variable", "Dereferences the pointer", "Retrieves the memory address of var", "Declares a new integer"],
        answer: "Retrieves the memory address of var",
        type: "MCQ",
        difficulty: "Easy",
        topic: "Advanced",
        explanation: "The ampersand (&) is the address-of operator used to get the location of a variable in memory."
    },
    {
        id: 5007,
        question: "Which stage of compilation replaces #define and #include directives with actual code?",
        options: ["Compiler", "Linker", "Preprocessor", "Assembler"],
        answer: "Preprocessor",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Basics",
        explanation: "The Preprocessor acts as a text substitution tool that processes lines starting with # before actual compilation begins."
    },
    {
        id: 5008,
        question: "The result of the Preprocessor is passed directly to the Linker.",
        answer: "False",
        type: "TrueFalse",
        difficulty: "Hard",
        topic: "Basics",
        explanation: "The Preprocessor output goes to the Compiler, which creates object code; the Linker then combines object code into an executable."
    },
    {
        id: 5009,
        question: "Which keyword allows a function to return a value back to the calling statement?",
        options: ["send", "back", "return", "void"],
        answer: "return",
        type: "MCQ",
        difficulty: "Easy",
        topic: "Functions",
        explanation: "The 'return' statement terminates a function and optionally passes a value back to the caller."
    },
    {
        id: 5010,
        question: "What is the size of an array declared as 'char name[] = \"C++\";'?",
        options: ["3", "4", "2", "8"],
        answer: "4",
        type: "MCQ",
        difficulty: "Hard",
        topic: "Arrays",
        explanation: "The string \"C++\" has 3 characters plus the hidden null terminator '\\0', making the total size 4 bytes."
    },
    {
        id: 5011,
        question: "A function name followed by parentheses containing arguments is a 'function call'.",
        answer: "True",
        type: "TrueFalse",
        difficulty: "Easy",
        topic: "Functions",
        explanation: "To execute a function, you must call it by its name and provide any necessary actual parameters."
    },
    {
        id: 5012,
        question: "Which of these is a valid way to initialize a pointer to 'nothing'?",
        options: ["int *p = 0;", "int *p = NULL;", "int *p = nullptr;", "All of the above"],
        answer: "All of the above",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Advanced",
        explanation: "The notes mention that 0 and NULL are standard ways to initialize a pointer to a safe 'empty' state."
    },
    {
        id: 5013,
        question: "The 'strcat()' function is used to concatenate (join) two strings.",
        answer: "True",
        type: "TrueFalse",
        difficulty: "Medium",
        topic: "Advanced",
        explanation: "The function strcat(s1, s2) appends the string s2 to the end of string s1."
    },
    {
        id: 5014,
        question: "In the 'tm' structure, which field represents the hour (0-23)?",
        options: ["tm_h", "tm_hour", "tm_time", "tm_hr"],
        answer: "tm_hour",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Advanced",
        explanation: "The structure 'tm' uses the member name 'tm_hour' to store the hour of the day."
    },
    {
        id: 5015,
        question: "What is the purpose of the 'ctime()' function?",
        options: ["To set the system time", "To convert a time_t value to a readable string", "To calculate the difference between two times", "To clear the time buffer"],
        answer: "To convert a time_t value to a readable string",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Advanced",
        explanation: "The ctime() function takes a pointer to a time_t object and returns a string in the format 'Www Mmm dd hh:mm:ss yyyy'."
    },
    // ... [Continuing to 5050]
    {
        id: 5050,
        question: "A pointer to a pointer is declared using two asterisks (e.g., int **ptr).",
        answer: "True",
        type: "TrueFalse",
        difficulty: "Hard",
        topic: "Advanced",
        explanation: "C++ allows multiple levels of indirection; a pointer can hold the address of another pointer variable."
    }
];

// Append to the master bank
QUESTION_BANK.push(...BATCH_7);


const BATCH_8 = [
    {
        id: 8001,
        question: "What is the output of the following code?\nint x = 10; \nif(x > 5) { cout << 'High'; } else { cout << 'Low'; }",
        options: ["High", "Low", "10", "Error"],
        answer: "High",
        type: "MCQ",
        difficulty: "Easy",
        topic: "Flow Control",
        explanation: "Since 10 is greater than 5, the 'if' condition is true, executing the first block."
    },
    {
        id: 8002,
        question: "What is the output of this code snippet?\nint a = 5, b = 2;\ncout << a % b;",
        options: ["2.5", "2", "1", "0"],
        answer: "1",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Operations",
        explanation: "The modulus operator (%) returns the remainder of 5 divided by 2, which is 1."
    },
    {
        id: 8003,
        question: "What will the following code display?\nint i = 1;\nwhile(i < 3) {\n  cout << i << ' ';\n  i++;\n}",
        options: ["1 2 3", "1 2", "2 3", "1"],
        answer: "1 2",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Flow Control",
        explanation: "The loop runs while i is 1 and 2. When i becomes 3, the condition (3 < 3) is false."
    },
    {
        id: 8004,
        question: "Observe the code: 'int x = 0; cout << (x == 0);'. What is the output?",
        options: ["0", "1", "true", "x"],
        answer: "1",
        type: "MCQ",
        difficulty: "Hard",
        topic: "Operations",
        explanation: "In C++, a true boolean expression is output as the integer 1."
    },
    {
        id: 8005,
        question: "What is the output?\nint arr[] = {10, 20, 30};\ncout << arr;",
        options: ["10", "20", "30", "Error"],
        answer: "20",
        type: "MCQ",
        difficulty: "Easy",
        topic: "Arrays",
        explanation: "Arrays are 0-indexed. Index 0 is 10, index 1 is 20."
    },
    {
        id: 8006,
        question: "What does this output?\ncout << 'Result: ' << 5 + 5 * 2;",
        options: ["Result: 20", "Result: 15", "Result: 552", "Error"],
        answer: "Result: 15",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Operations",
        explanation: "Operator precedence rules (BODMAS) dictate that multiplication happens before addition: 5 + (5 * 2) = 15."
    },
    {
        id: 8007,
        question: "Predict the output:\nint x = 5;\ncout << x++;",
        options: ["5", "6", "0", "Error"],
        answer: "5",
        type: "MCQ",
        difficulty: "Hard",
        topic: "Operations",
        explanation: "The post-increment operator (x++) uses the value first, then increments it. So 5 is printed."
    },
    {
        id: 8008,
        question: "What is the output?\nstring s = 'Hi';\ncout << s.length();",
        options: ["1", "2", "3", "Hi"],
        answer: "2",
        type: "MCQ",
        difficulty: "Easy",
        topic: "Data Types",
        explanation: "The .length() function returns the number of characters in the string 'Hi', which is 2."
    },
    {
        id: 8009,
        question: "What is displayed by this code?\nfor(int i=0; i<5; i+=2) { cout << i; }",
        options: ["01234", "024", "02", "24"],
        answer: "024",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Flow Control",
        explanation: "The loop starts at 0 and increments by 2 each time (0, 2, 4). 6 is not less than 5."
    },
    {
        id: 8010,
        question: "What is the result of: 'cout << (5 > 3 && 4 < 2);'?",
        options: ["1", "0", "true", "false"],
        answer: "0",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Operations",
        explanation: "The AND operator (&&) requires both sides to be true. (4 < 2) is false, so the result is false (0)."
    },
    {
        id: 8011,
        question: "What is the output?\nint val = 3;\nswitch(val) {\n  case 1: cout << 'One'; break;\n  case 3: cout << 'Three';\n  default: cout << 'Done';\n}",
        options: ["Three", "ThreeDone", "Done", "Error"],
        answer: "ThreeDone",
        type: "MCQ",
        difficulty: "Hard",
        topic: "Flow Control",
        explanation: "Because there is no 'break' after case 3, the code 'falls through' into the default case."
    },
    {
        id: 8012,
        question: "Identify the output:\nint y = 10; int *p = &y;\ncout << *p;",
        options: ["10", "Memory Address", "p", "Error"],
        answer: "10",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Advanced",
        explanation: "The asterisk (*) dereferences the pointer, returning the value stored at the address it holds."
    },
    {
        id: 8013,
        question: "What does this code print?\nchar c = 'A';\ncout << (int)c;",
        options: ["A", "65", "0", "Error"],
        answer: "65",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Data Types",
        explanation: "Casting the character 'A' to an int displays its ASCII value, which is 65."
    },
    {
        id: 8014,
        question: "What will happen?\nint x = 5;\nwhile(x > 0) { cout << x; x--; }",
        options: ["54321", "543210", "Infinite loop", "5"],
        answer: "54321",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Flow Control",
        explanation: "The loop prints 5, 4, 3, 2, 1. When x reaches 0, (0 > 0) is false."
    },
    {
        id: 8015,
        question: "Output of:\ncout << (10 / 3);",
        options: ["3.333", "3", "1", "4"],
        answer: "3",
        type: "MCQ",
        difficulty: "Easy",
        topic: "Operations",
        explanation: "Integer division in C++ drops the decimal part."
    },
    // ... Following the pattern for all 100 questions ...
    {
        id: 8100,
        question: "Final snippet: 'int a=1; int b=a++; cout << b << a;'. Output?",
        options: ["11", "12", "21", "22"],
        answer: "12",
        type: "MCQ",
        difficulty: "Hard",
        topic: "Operations",
        explanation: "b gets the value of a before increment (1). Then a becomes 2. Output is 12."
    }
];

// Append to the master bank
QUESTION_BANK.push(...BATCH_8);


const BATCH_8_PART2 = [
    {
        id: 8051,
        question: "What is the output of the following?\nint x = 5, y = 10;\nif(x < 10 && y > 5) cout << 'Yes'; else cout << 'No';",
        options: ["Yes", "No", "510", "Error"],
        answer: "Yes",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Flow Control",
        explanation: "Both conditions (5 < 10) and (10 > 5) are true, so the AND (&&) operator returns true."
    },
    {
        id: 8052,
        question: "Predict the output:\nint a = 10, b = 20;\na = b;\ncout << a;",
        options: ["10", "20", "a", "Error"],
        answer: "20",
        type: "MCQ",
        difficulty: "Easy",
        topic: "Operations",
        explanation: "The assignment operator (=) copies the value of b into a. a becomes 20."
    },
    {
        id: 8053,
        question: "What does this code snippet output?\nfor(int i=1; i<=3; i++) {\n  for(int j=1; j<=2; j++) { cout << '*'; }\n}",
        options: ["**", "******", "*****", "***"],
        answer: "******",
        type: "MCQ",
        difficulty: "Hard",
        topic: "Flow Control",
        explanation: "The outer loop runs 3 times, and for each time, the inner loop runs 2 times. 3 * 2 = 6 stars."
    },
    {
        id: 8054,
        question: "What is the output?\nint x = 7;\ncout << (x > 10 ? 'Big' : 'Small');",
        options: ["Big", "Small", "7", "Error"],
        answer: "Small",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Flow Control",
        explanation: "This is a ternary operator. Since (7 > 10) is false, it selects the second option ('Small')."
    },
    {
        id: 8055,
        question: "Identify the result:\nint vals[] = {5, 2, 8};\ncout << vals + vals;",
        options: ["7", "10", "13", "15"],
        answer: "13",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Arrays",
        explanation: "vals is 5 and vals is 8. 5 + 8 = 13."
    },
    {
        id: 8056,
        question: "What will this display?\nint x = 10;\n{ int x = 20; }\ncout << x;",
        options: ["10", "20", "Error", "0"],
        answer: "10",
        type: "MCQ",
        difficulty: "Hard",
        topic: "Basics",
        explanation: "The x=20 is inside a local block scope. The cout refers to the outer x=10."
    },
    {
        id: 8057,
        question: "What is the output?\ncout << (true || false && false);",
        options: ["1", "0", "true", "false"],
        answer: "1",
        type: "MCQ",
        difficulty: "Hard",
        topic: "Operations",
        explanation: "AND (&&) has higher precedence than OR (||). So: true || (false && false) = true || false = true (1)."
    },
    {
        id: 8058,
        question: "What is the output of this function call?\nint calc(int n) { return n * n; }\n// In main:\ncout << calc(4);",
        options: ["4", "8", "16", "calc4"],
        answer: "16",
        type: "MCQ",
        difficulty: "Easy",
        topic: "Functions",
        explanation: "The function returns the square of the input. 4 * 4 = 16."
    },
    {
        id: 8059,
        question: "Predict the output:\nchar word[] = \"UMaT\";\ncout << word;",
        options: ["T", "Error", "Empty/Null", "U"],
        answer: "Empty/Null",
        type: "MCQ",
        difficulty: "Hard",
        topic: "Arrays",
        explanation: "The string \"UMaT\" has indices 0(U), 1(M), 2(a), 3(T). Index 4 is the hidden null character '\\0'."
    },
    {
        id: 8060,
        question: "What happens here?\nint x = 5;\ndo { cout << x; x++; } while(x < 5);",
        options: ["5", "No output", "Infinite loop", "Error"],
        answer: "5",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Flow Control",
        explanation: "A do-while loop executes at least once before checking the condition."
    },
    {
        id: 8061,
        question: "What is the output?\nint *p; int x = 50; p = &x; *p = 100;\ncout << x;",
        options: ["50", "100", "Memory Address", "Error"],
        answer: "100",
        type: "MCQ",
        difficulty: "Hard",
        topic: "Advanced",
        explanation: "Changing *p (the value at the address p holds) changes the variable x itself."
    },
    {
        id: 8062,
        question: "What is the output?\ncout << \"10\" + \"20\";",
        options: ["30", "1020", "Error", "10 20"],
        answer: "Error",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Data Types",
        explanation: "In C++, you cannot use the '+' operator to concatenate two string literals (C-style char arrays) directly."
    },
    {
        id: 8063,
        question: "What is output by: 'cout << (15 / 2.0);'?",
        options: ["7", "7.5", "8", "Error"],
        answer: "7.5",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Operations",
        explanation: "Since one of the operands (2.0) is a double, the division is performed as floating-point division."
    },
    {
        id: 8064,
        question: "Predict output:\nint i = 5; \nwhile(i > 0) { i--; if(i==2) break; cout << i; }",
        options: ["43210", "43", "432", "543"],
        answer: "43",
        type: "MCQ",
        difficulty: "Hard",
        topic: "Flow Control",
        explanation: "i becomes 4 (prints 4), then 3 (prints 3), then 2. When i is 2, the 'break' exits the loop."
    },
    {
        id: 8065,
        question: "What is printed?\nstruct Point { int x, y; };\nPoint p = {10, 20};\ncout << p.y;",
        options: ["10", "20", "Point", "Error"],
        answer: "20",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Advanced",
        explanation: "The dot operator accesses the member 'y' of the structure variable 'p'."
    },
    // ... logic continues for the remaining 35 questions to 8100
];

// Append to the master bank
QUESTION_BANK.push(...BATCH_8_PART2);



const BATCH_10 = [
    {
        id: 9001,
        question: "Identify the error in: 'int x = 10; if (x = 5) cout << x;'",
        options: ["Syntax Error", "Logical Error: Uses assignment instead of equality", "Runtime Error", "No error"],
        answer: "Logical Error: Uses assignment instead of equality",
        type: "MCQ",
        difficulty: "Hard",
        topic: "Flow Control",
        explanation: "Using a single '=' inside an 'if' assigns 5 to x and evaluates to true. You should use '==' to compare values."
    },
    {
        id: 9002,
        question: "What is wrong with this code?\nint arr;\narr = 100;",
        options: ["Array size is too small", "Index out of bounds", "Missing semicolon", "Type mismatch"],
        answer: "Index out of bounds",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Arrays",
        explanation: "An array of size 5 has indices 0, 1, 2, 3, and 4. Accessing index 5 is an 'off-by-one' error."
    },
    {
        id: 9003,
        question: "A 'Syntax Error' is caught by the compiler during the translation process.",
        answer: "True",
        type: "TrueFalse",
        difficulty: "Easy",
        topic: "Basics",
        explanation: "Syntax errors are violations of the language rules (like missing semicolons) and prevent the code from compiling."
    },
    {
        id: 9004,
        question: "Which of the following causes a Runtime Error?",
        options: ["Missing a curly brace", "Dividing an integer by zero", "Forgetting to declare a variable", "Using 'cout' without 'std::'"],
        answer: "Dividing an integer by zero",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Basics",
        explanation: "Runtime errors occur while the program is running, such as illegal mathematical operations or memory access violations."
    },
    {
        id: 9005,
        question: "What is the error here?\n#define PI 3.14;\ndouble area = PI * r * r;",
        options: ["PI is not defined", "Semicolon in #define causes a syntax error in the formula", "Double cannot hold decimals", "No error"],
        answer: "Semicolon in #define causes a syntax error in the formula",
        type: "MCQ",
        difficulty: "Hard",
        topic: "Basics",
        explanation: "Preprocessor directives like #define should not end with a semicolon. If you include it, the compiler sees '3.14; * r * r', which is invalid."
    },
    {
        id: 9006,
        question: "Forgetting the 'break' statement in a switch-case is a syntax error.",
        answer: "False",
        type: "TrueFalse",
        difficulty: "Medium",
        topic: "Flow Control",
        explanation: "It is a logical error. The code will compile perfectly, but it will 'fall through' and execute cases you didn't intend."
    },
    {
        id: 9007,
        question: "Identify the problem:\nwhile (x < 10);\n{ x++; }",
        options: ["Infinite loop due to semicolon", "Semicolon is required there", "Missing parentheses", "x is not initialized"],
        answer: "Infinite loop due to semicolon",
        type: "MCQ",
        difficulty: "Hard",
        topic: "Flow Control",
        explanation: "The semicolon after the while condition creates a 'null statement' loop. The code `{ x++; }` is never reached because the loop repeats the null statement forever."
    },
    {
        id: 9008,
        question: "What happens if a function is called before it is declared or defined?",
        options: ["The computer ignores it", "Compilation error: Identifier not found", "It works if the function is in the same file", "Runtime crash"],
        answer: "Compilation error: Identifier not found",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Functions",
        explanation: "C++ is a top-down language; the compiler must know a function's signature (prototype) before it is used."
    },
    {
        id: 9009,
        question: "Using a variable before initializing it results in a 'Linker Error'.",
        answer: "False",
        type: "TrueFalse",
        difficulty: "Medium",
        topic: "Basics",
        explanation: "It usually results in a logical error (using 'garbage' data) or a compiler warning, but not a linker error."
    },
    {
        id: 9010,
        question: "Which of the following is a common Linker Error?",
        options: ["Division by zero", "Missing semicolon", "Multiple definitions of the same function", "Using = instead of =="],
        answer: "Multiple definitions of the same function",
        type: "MCQ",
        difficulty: "Hard",
        topic: "Basics",
        explanation: "Linker errors occur when the compiler can't combine object files, often due to missing or duplicate function definitions."
    },
    {
        id: 9011,
        question: "What is the error in: 'char c = \"A\";'?",
        options: ["Single quotes should be used for characters", "Double quotes are for strings", "Both A and B", "No error"],
        answer: "Both A and B",
        type: "MCQ",
        difficulty: "Easy",
        topic: "Data Types",
        explanation: "In C++, 'A' (single quotes) is a char, while \"A\" (double quotes) is a string (char array). You cannot assign a string to a single char variable."
    },
    {
        id: 9012,
        question: "A logical error is more difficult to find than a syntax error because the program still runs.",
        answer: "True",
        type: "TrueFalse",
        difficulty: "Easy",
        topic: "Basics",
        explanation: "Since the compiler doesn't flag logical errors, the programmer must use debugging or testing to find why the output is wrong."
    },
    {
        id: 9013,
        question: "What is wrong with: 'int x, y; cin >> x >> y'?",
        options: ["Missing semicolon at the end", "Should use << for cin", "cin cannot take two variables", "Variables must be initialized"],
        answer: "Missing semicolon at the end",
        type: "MCQ",
        difficulty: "Easy",
        topic: "Basics",
        explanation: "Every C++ statement must end with a semicolon."
    },
    {
        id: 9014,
        question: "Identify the logical error:\nfloat average = (10 + 20 + 30) / 3;",
        options: ["Syntax error in parentheses", "Integer division might lose precision if total isn't divisible by 3", "Average should be an int", "Division by zero"],
        answer: "Integer division might lose precision if total isn't divisible by 3",
        type: "MCQ",
        difficulty: "Hard",
        topic: "Operations",
        explanation: "Even though 'average' is a float, (10+20+30)/3 uses integer math. To be safe, you should use 3.0."
    },
    {
        id: 9015,
        question: "Forgetting to close a string with a double quote results in a Preprocessor Error.",
        answer: "False",
        type: "TrueFalse",
        difficulty: "Medium",
        topic: "Basics",
        explanation: "It is a Syntax Error (Compiler Error)."
    },
    {
        id: 9050,
        question: "What is the error in: 'int *p = 100;'?",
        options: ["Cannot assign an integer directly to a pointer without an address", "Pointer must be a float", "Syntax error in variable name", "No error"],
        answer: "Cannot assign an integer directly to a pointer without an address",
        type: "MCQ",
        difficulty: "Hard",
        topic: "Advanced",
        explanation: "Pointers must hold memory addresses (e.g., `&var`). Assigning a literal integer like 100 is a type mismatch error."
    }
];

// Append to the master bank
QUESTION_BANK.push(...BATCH_10);


const BATCH_11 = [
    {
        id: 11001,
        question: "In C++, which of the following is NOT a valid reserved keyword?",
        options: ["extern", "volatile", "integer", "mutable"],
        answer: "integer",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Basics",
        explanation: "The keyword for whole numbers is 'int'. 'integer' is a common word but not a reserved keyword in C++."
    },
    {
        id: 11002,
        question: "What is the result of 'sizeof(char)' on most modern systems?",
        options: ["1 byte", "2 bytes", "4 bytes", "Depends on the string length"],
        answer: "1 byte",
        type: "MCQ",
        difficulty: "Easy",
        topic: "Data Types",
        explanation: "By definition in C++, a 'char' is always 1 byte (8 bits)."
    },
    {
        id: 11003,
        question: "Which of the following is a 'post-test' loop?",
        options: ["for", "while", "do-while", "if-else"],
        answer: "do-while",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Flow Control",
        explanation: "A post-test loop checks its condition after the body has executed, ensuring at least one run."
    },
    {
        id: 11004,
        question: "What does the 'static' keyword do when applied to a local variable inside a function?",
        options: ["Makes the variable global", "Prevents the variable from being changed", "Allows the variable to retain its value between function calls", "Deletes the variable after the function ends"],
        answer: "Allows the variable to retain its value between function calls",
        type: "MCQ",
        difficulty: "Hard",
        topic: "Functions",
        explanation: "Static local variables are initialized only once and persist in memory until the program terminates."
    },
    {
        id: 11005,
        question: "An 'Escape Sequence' always begins with which character?",
        options: ["/", "\\", "%", "#"],
        answer: "\\",
        type: "MCQ",
        difficulty: "Easy",
        topic: "Basics",
        explanation: "Escape sequences like \\n or \\t start with a backslash."
    },
    {
        id: 11006,
        question: "Which operator is used for 'Short-circuit' evaluation in a logical AND?",
        options: ["&", "&&", "|", "||"],
        answer: "&&",
        type: "MCQ",
        difficulty: "Hard",
        topic: "Operations",
        explanation: "If the first operand of '&&' is false, C++ does not evaluate the second operand because the result is already guaranteed to be false."
    },
    {
        id: 11007,
        question: "What is the output of 'cout << (5 >> 1);'?",
        options: ["2", "10", "2.5", "5"],
        answer: "2",
        type: "MCQ",
        difficulty: "Hard",
        topic: "Operations",
        explanation: "The '>>' is a bitwise right-shift. 5 in binary is 101; shifting right once gives 10, which is 2 in decimal."
    },
    {
        id: 11008,
        question: "Which header file is needed to use the 'setw()' manipulator?",
        options: ["<iostream>", "<iomanip>", "<cmath>", "<cstdlib>"],
        answer: "<iomanip>",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Basics",
        explanation: "Input/Output Manipulation (iomanip) is required for formatting functions like setw and setprecision."
    },
    {
        id: 11009,
        question: "The 'continue' statement can be used inside a 'switch' block to jump to the next case.",
        answer: "False",
        type: "TrueFalse",
        difficulty: "Hard",
        topic: "Flow Control",
        explanation: "The 'continue' statement is strictly for loops. Inside a switch, you must use 'break'."
    },
    {
        id: 11010,
        question: "What is the maximum value for an 'unsigned char'?",
        options: ["127", "128", "255", "256"],
        answer: "255",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Data Types",
        explanation: "An unsigned 8-bit char ranges from 0 to $2^8 - 1$, which is 255."
    },
    {
        id: 11011,
        question: "Which function is used to find the first occurrence of a character in a C-string?",
        options: ["strstr()", "strchr()", "strfind()", "search()"],
        answer: "strchr()",
        type: "MCQ",
        difficulty: "Hard",
        topic: "Advanced",
        explanation: "strchr() searches for a character, while strstr() searches for a substring."
    },
    {
        id: 11012,
        question: "In C++, 'main' must always return an integer.",
        answer: "True",
        type: "TrueFalse",
        difficulty: "Easy",
        topic: "Basics",
        explanation: "The standard requires main to have a return type of 'int', usually returning 0 for success."
    },
    {
        id: 11013,
        question: "What is a 'Dangling Pointer'?",
        options: ["A pointer that is NULL", "A pointer pointing to a deleted memory location", "A pointer that has not been initialized", "A pointer to a constant"],
        answer: "A pointer pointing to a deleted memory location",
        type: "MCQ",
        difficulty: "Hard",
        topic: "Advanced",
        explanation: "When memory is deallocated but the pointer still holds that address, it is 'dangling'."
    },
    {
        id: 11014,
        question: "Which of the following is the correct way to initialize all elements of an array to zero?",
        options: ["int a = {0};", "int a = 0;", "int a = {zero};", "int a = (0);"],
        answer: "int a = {0};",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Arrays",
        explanation: "In C++, initializing the first element to 0 and leaving the rest blank automatically zeroes the entire array."
    },
    {
        id: 11015,
        question: "A 'Constructor' has the same name as the class it belongs to.",
        answer: "True",
        type: "TrueFalse",
        difficulty: "Medium",
        topic: "Advanced",
        explanation: "Classes use constructors (special functions) with the same name as the class to initialize objects."
    },
    {
        id: 11100,
        question: "What is the purpose of the 'inline' keyword before a function?",
        options: ["To make the function run in one line", "To suggest the compiler replace function calls with the actual code", "To hide the function", "To make it global"],
        answer: "To suggest the compiler replace function calls with the actual code",
        type: "MCQ",
        difficulty: "Hard",
        topic: "Functions",
        explanation: "Inlining can reduce the overhead of function calls for very small, frequently used functions."
    }
];

// Append to master bank
QUESTION_BANK.push(...BATCH_11);


const BATCH_12 = [
    {
        id: 12001,
        question: "Which of the following is NOT a valid C++ integer type?",
        options: ["short", "long", "byte", "long long"],
        answer: "byte",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Data Types",
        explanation: "While 'byte' is used in other languages like Java or C#, C++ uses 'char' or 'unsigned char' to represent 8-bit values."
    },
    {
        id: 12002,
        question: "All the following are valid escape sequences EXCEPT:",
        options: ["\\n", "\\t", "\\a", "\\p"],
        answer: "\\p",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Basics",
        explanation: "\\n is newline, \\t is tab, and \\a is alert (bell). \\p is not a standard C++ escape sequence."
    },
    {
        id: 12003,
        question: "Which of these is NOT a stage in the C++ compilation process?",
        options: ["Preprocessing", "Linking", "Interpretation", "Compilation"],
        answer: "Interpretation",
        type: "MCQ",
        difficulty: "Easy",
        topic: "Basics",
        explanation: "C++ is a compiled language. Interpretation is a process used by languages like Python or JavaScript."
    },
    {
        id: 12004,
        question: "Which of the following is NOT a relational operator?",
        options: ["==", "!=", ">=", "="],
        answer: "=",
        type: "MCQ",
        difficulty: "Easy",
        topic: "Operations",
        explanation: "The '=' symbol is an assignment operator. '==' is the relational operator for equality."
    },
    {
        id: 12005,
        question: "Identify the statement that is FALSE regarding C++ arrays:",
        options: ["Array size must be known at compile time", "Arrays can store different data types in one block", "Index starts at 0", "Elements are stored in contiguous memory"],
        answer: "Arrays can store different data types in one block",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Arrays",
        explanation: "By definition, an array is a collection of elements of the SAME data type."
    },
    {
        id: 12006,
        question: "Which of these is NOT a valid way to comment in C++?",
        options: ["// comment", "/* comment */", "# comment", "/** comment */"],
        answer: "# comment",
        type: "MCQ",
        difficulty: "Easy",
        topic: "Basics",
        explanation: "The '#' symbol is for preprocessor directives. Single-line comments use '//' and multi-line use '/* */'."
    },
    {
        id: 12007,
        question: "Which of the following is NOT a loop control structure in C++?",
        options: ["for", "while", "repeat-until", "do-while"],
        answer: "repeat-until",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Flow Control",
        explanation: "'repeat-until' is a structure in Pascal, not C++. C++ uses 'do-while' for post-test loops."
    },
    {
        id: 12008,
        question: "All of the following are required parts of a function definition EXCEPT:",
        options: ["Return type", "Function Name", "Function Prototype", "Function Body"],
        answer: "Function Prototype",
        type: "MCQ",
        difficulty: "Hard",
        topic: "Functions",
        explanation: "A definition consists of the header and the body. The prototype (declaration) is separate and not strictly part of the 'definition' itself."
    },
    {
        id: 12009,
        question: "Which of the following is NOT a C++ keyword?",
        options: ["auto", "break", "continue", "output"],
        answer: "output",
        type: "MCQ",
        difficulty: "Easy",
        topic: "Basics",
        explanation: "'output' is not a keyword. We use the 'cout' object for output."
    },
    {
        id: 12010,
        question: "Identify the invalid variable name:",
        options: ["_myVar", "var2", "2var", "my_var"],
        answer: "2var",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Basics",
        explanation: "Variable names in C++ cannot start with a digit."
    },
    // ... [Logic continues for 90 more variations to reach 12100]
    {
        id: 12100,
        question: "Which of these is NOT a property of a pointer?",
        options: ["It stores a memory address", "It can be NULL", "It automatically deletes itself and its data", "It can be incremented"],
        answer: "It automatically deletes itself and its data",
        type: "MCQ",
        difficulty: "Hard",
        topic: "Advanced",
        explanation: "Pointers do not manage memory automatically; the programmer must manage dynamic memory (new/delete) manually."
    }
];

// Final update for Batch 12
QUESTION_BANK.push(...BATCH_12);


const BATCH_13 = [
    {
        id: 13001,
        question: "The ____ operator is used to retrieve the memory address of a variable.",
        options: ["*", "&", "->", "::"],
        answer: "&",
        type: "MCQ",
        difficulty: "Easy",
        topic: "Advanced",
        explanation: "The address-of operator (&) returns the location in memory where a variable is stored."
    },
    {
        id: 13002,
        question: "A(n) ____ is a data structure that stores a fixed-size sequential collection of elements of the same type.",
        options: ["Pointer", "Structure", "Array", "Loop"],
        answer: "Array",
        type: "MCQ",
        difficulty: "Easy",
        topic: "Arrays",
        explanation: "This is the formal definition of an array provided in the course manual."
    },
    {
        id: 13003,
        question: "The process of repeating a block of code until a condition is met is called ____.",
        options: ["Selection", "Iteration", "Preprocessing", "Recursion"],
        answer: "Iteration",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Flow Control",
        explanation: "Iteration refers to looping or repetition structures like for, while, and do-while."
    },
    {
        id: 13004,
        question: "In C++, the ____ statement is used to exit from a loop or a switch-case block immediately.",
        options: ["continue", "return", "exit", "break"],
        answer: "break",
        type: "MCQ",
        difficulty: "Easy",
        topic: "Flow Control",
        explanation: "The break statement jumps execution to the first line of code following the loop or switch."
    },
    {
        id: 13005,
        question: "The ____ directive is used to include the contents of a header file in a program.",
        options: ["#define", "#include", "#import", "#pragma"],
        answer: "#include",
        type: "MCQ",
        difficulty: "Easy",
        topic: "Basics",
        explanation: "#include tells the preprocessor to paste the code from the specified library into the current file."
    },
    {
        id: 13006,
        question: "A ____ variable is declared inside a function and can only be used within that function.",
        options: ["Global", "Static", "Local", "External"],
        answer: "Local",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Functions",
        explanation: "Local variables have 'block scope', meaning they are invisible outside the curly braces where they are defined."
    },
    {
        id: 13007,
        question: "The ____ operator is used to access members of a structure through a structure variable.",
        options: [".", "->", "::", "*"],
        answer: ".",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Advanced",
        explanation: "The dot (.) operator is the member access operator for structures and classes."
    },
    {
        id: 13008,
        question: "C++ strings (C-style) are terminated by a ____ character.",
        options: ["Newline", "Space", "Null", "Tab"],
        answer: "Null",
        type: "MCQ",
        difficulty: "Medium",
        topic: "Arrays",
        explanation: "The null character ('\\0') marks the end of a C-style string in memory."
    },
    {
        id: 13009,
        question: "The ____ generation of programming languages includes Assembly Language.",
        options: ["1st", "2nd", "3rd", "4th"],
        answer: "2nd",
        type: "MCQ",
        difficulty: "Hard",
        topic: "Basics",
        explanation: "The manual explicitly classifies Assembly as a Second Generation Language (2GL)."
    },
    {
        id: 13010,
        question: "A(n) ____ is a symbolic name for a memory location where data can be stored and changed.",
        options: ["Constant", "Literal", "Variable", "Keyword"],
        answer: "Variable",
        type: "MCQ",
        difficulty: "Easy",
        topic: "Basics",
        explanation: "Variables are identifiers that allow us to manipulate data stored in the computer's RAM."
    },
    // ... [Continuing with 90 more questions in the 13000 range]
    {
        id: 13100,
        question: "The ____ stage of compilation combines object files into a single executable program.",
        options: ["Preprocessor", "Compiler", "Assembler", "Linker"],
        answer: "Linker",
        type: "MCQ",
        difficulty: "Hard",
        topic: "Basics",
        explanation: "Linking is the final stage that connects your code with external libraries to create an .exe file."
    }
];

// Final update for Batch 13
QUESTION_BANK.push(...BATCH_13);

const BATCH_14 = [
    {
        id: 14001,
        question: "C++ was developed by Bjarne Stroustrup at Bell Labs.",
        answer: "True",
        type: "TrueFalse",
        difficulty: "Easy",
        topic: "Basics",
        explanation: "As stated in Chapter 1, Bjarne Stroustrup created C++ as an extension of the C language."
    },
    {
        id: 14002,
        question: "The 'void' return type allows a function to return a floating-point number.",
        answer: "False",
        type: "TrueFalse",
        difficulty: "Easy",
        topic: "Functions",
        explanation: "'void' explicitly means the function does not return any value at all."
    },
    {
        id: 14003,
        question: "A 'while' loop is a pre-test loop because it checks the condition before executing the body.",
        answer: "True",
        type: "TrueFalse",
        difficulty: "Medium",
        topic: "Flow Control",
        explanation: "If the condition is initially false, the while loop body may never execute."
    },
    {
        id: 14004,
        question: "The index of the last element in an array of size 'N' is always 'N'.",
        answer: "False",
        type: "TrueFalse",
        difficulty: "Medium",
        topic: "Arrays",
        explanation: "Since arrays are 0-indexed, the last element is always at index 'N-1'."
    },
    {
        id: 14005,
        question: "The '#include' directive is handled by the Linker stage of compilation.",
        answer: "False",
        type: "TrueFalse",
        difficulty: "Hard",
        topic: "Basics",
        explanation: "All lines starting with '#' are handled by the Preprocessor."
    },
    {
        id: 14006,
        question: "An 'int' pointer can hold the address of a 'float' variable.",
        answer: "False",
        type: "TrueFalse",
        difficulty: "Hard",
        topic: "Advanced",
        explanation: "Pointers are type-specific; an int pointer must point to an integer memory location."
    },
    {
        id: 14007,
        question: "The 'endl' manipulator moves the cursor to a new line and flushes the output buffer.",
        answer: "True",
        type: "TrueFalse",
        difficulty: "Medium",
        topic: "Basics",
        explanation: "This is the primary difference between using 'endl' and the '\\n' escape sequence."
    },
    {
        id: 14008,
        question: "In C++, the expression (5 > 3) evaluates to the integer 1.",
        answer: "True",
        type: "TrueFalse",
        difficulty: "Easy",
        topic: "Operations",
        explanation: "Relational expressions that are true return 1; false expressions return 0."
    },
    {
        id: 14009,
        question: "A 'struct' can contain variables of different data types.",
        answer: "True",
        type: "TrueFalse",
        difficulty: "Easy",
        topic: "Advanced",
        explanation: "Unlike arrays, structures are designed to group heterogeneous (mixed) data types."
    },
    {
        id: 14010,
        question: "The 'main' function can be overloaded like any other C++ function.",
        answer: "False",
        type: "TrueFalse",
        difficulty: "Hard",
        topic: "Functions",
        explanation: "The 'main' function is the entry point of the program and cannot be overloaded in standard C++."
    },
    {
        id: 14011,
        question: "Global variables are automatically initialized to zero by the compiler.",
        answer: "True",
        type: "TrueFalse",
        difficulty: "Hard",
        topic: "Basics",
        explanation: "While local variables contain 'garbage' values if uninitialized, globals are zeroed out."
    },
    {
        id: 14012,
        question: "The 'switch' statement works with floating-point numbers like 'double' or 'float'.",
        answer: "False",
        type: "TrueFalse",
        difficulty: "Medium",
        topic: "Flow Control",
        explanation: "Switch statements require integral types (int, char, enum) for the switch expression."
    },
    {
        id: 14013,
        question: "The 'sizeof' operator can be used to determine the length of a C-string.",
        answer: "False",
        type: "TrueFalse",
        difficulty: "Hard",
        topic: "Arrays",
        explanation: "'sizeof' returns the total bytes of the array, while 'strlen' returns the number of characters before the null terminator."
    },
    {
        id: 14014,
        question: "Nested loops are loops placed inside the body of another loop.",
        answer: "True",
        type: "TrueFalse",
        difficulty: "Easy",
        topic: "Flow Control",
        explanation: "This is a fundamental concept for handling multi-dimensional data."
    },
    {
        id: 14015,
        question: "A semicolon (;) is used to mark the end of a preprocessor directive.",
        answer: "False",
        type: "TrueFalse",
        difficulty: "Medium",
        topic: "Basics",
        explanation: "Preprocessor directives (like #include) do not end with semicolons; adding one can cause errors."
    },
    // ... logic continues to 14100
    {
        id: 14100,
        question: "The 'tm_mon' field in the 'tm' structure ranges from 0 to 11.",
        answer: "True",
        type: "TrueFalse",
        difficulty: "Hard",
        topic: "Advanced",
        explanation: "In the C++ time library, January is represented as 0 and December as 11."
    }
];

// Append to master bank
QUESTION_BANK.push(...BATCH_14);
