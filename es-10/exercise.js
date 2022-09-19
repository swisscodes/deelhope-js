const firstYearCompleted = true;
const yearsCompleted = 1;

yearsCompleted == firstYearCompleted; //== — loose equality (double equals)
/*compares 
Loose equality is symmetric: A == B always has identical semantics to B == A 
for any values of A and B (except for the order of applied conversions). 
The behavior for performing loose equality using == is as follows:
0 and 1 are type 'number' but in a Boolean expression, 0 casts to false and 1 casts to true
*/

yearsCompleted === firstYearCompleted; //=== — strict equality (triple equals)
//test to see if two objects are the same object and not if they are identical objects.
//booloan is different from number

/*Strict equality using ===
Strict equality compares two values for equality. Neither value is implicitly 
converted to some other value before being compared. If the values have different types, 
the values are considered unequal. If the values have the same type, are not numbers, 
and have the same value, they're considered equal. Finally, if both values are numbers, 
they're considered equal if they're both not NaN and are the same value, or if one is +0 and one is -0.
*/
