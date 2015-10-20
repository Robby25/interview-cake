/**********************************************************************************************************************
 * Given an array_of_ints, find the highest_product you can get from three of the integers.
 */
 function highestProductOfThree( arr )
 {
 	/** Highest product of three will be the three highest elements, **/
 	/** or the highest and the two largest negatives **/

 	var highest = Math.max( arr[0], arr[1] );
 	var lowest = Math.min( arr[0], arr[1] );
 	var highestOfTwo = highest * lowest;
 	var lowestOfTwo = highest * lowest;
 	var highestOfThree = highestOfThree * arr[2];

 	for ( elem in arr )
 	{
 		highestOfThree = Math.max( highestOfThree, elem * highestOfTwo, elem * lowestOfTwo );
 		highestOfTwo = Math.max( highestOfTwo, elem * highest );
 		lowestOfTwo = Math.min( lowestOfTwo, elem * lowest );
 		highest = Math.max( highest, elem );
 		lowest = Math.min( lowest, elem );
 	}
 	return highestOfThree;
 }