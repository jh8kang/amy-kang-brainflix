export function reverseFirstThreeFunc(ls) {
    let firstThree = ls.splice(0, 3);
    // console.log(firstThree)
    let restofArray = ls.splice(4, ls.length);
    console.log(restofArray)
    firstThree.reverse();
    let finalArray = firstThree.concat(restofArray);
    return finalArray;
}