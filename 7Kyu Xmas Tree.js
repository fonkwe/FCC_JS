//Problems: 7 kyu Xmas Tree

//Description: Complete the function that returns a christmas tree of the given height. 
//The height is passed through to the function and the function should return a list containing each line of the tree.
//XMasTree(5) should return : ['____#____', '___###___', '__#####__', '_#######_', '#########', '____#____', '____#____']
//XMasTree(3) should return : ['__#__', '_###_', '#####', '__#__', '__#__']

//Steps:
//1.Create a container to hold the items
//2.loop throught the items and increment respectively
//3. pack items in the container.


//Implementation: 

function xMasTree(n){
    let arr = [];
    for(let i = 1; i < n; i++){
       arr.push(''.repeat(n-i)+'*'.repeat((i - 1) * 2 + 1)+''.repeat(n - i))
       console.log(arr);

    }
    return arr.join('\n')
    }
   //complete this code



//Test: 
console.log(xMasTree(3));//,['__#__', '_###_', '#####', '__#__', '__#__'])
console.log(xMasTree(7));//,['______#______', '_____###_____', '____#####____', '___#######___', '__#########__', '_###########_', '#############', '______#______', '______#______'])
console.log(xMasTree(2));//,['_#_', '###', '_#_', '_#_'] )
console.log(xMasTree(4));//,['___#___', '__###__', '_#####_', '#######', '___#___', '___#___'] )
console.log(xMasTree(6));//,['_____#_____', '____###____', '___#####___', '__#######__', '_#########_', '###########', '_____#_____', '_____#_____'])
