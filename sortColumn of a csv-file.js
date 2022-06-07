// Problems: 6 kyuSort the columns of a csv-file
//#Sort the columns of a csv-file
//You get a string with the content of a csv-file. The columns are separated by semicolons.
//The first line contains the names of the columns.
//Write a method that sorts the columns by the names of the columns alphabetically and incasesensitive.
/* An example:

Before sorting:
As table (only visualization):
|myjinxin2015|raulbc777|smile67|Dentzil|SteffenVogel_79|
|17945       |10091    |10088  |3907   |10132          |
|2           |12       |13     |48     |11             |

The csv-file:
myjinxin2015;raulbc777;smile67;Dentzil;SteffenVogel_79\n
17945;10091;10088;3907;10132\n
2;12;13;48;11

----------------------------------

After sorting:
As table (only visualization):
|Dentzil|myjinxin2015|raulbc777|smile67|SteffenVogel_79|
|3907   |17945       |10091    |10088  |10132          |
|48     |2           |12       |13     |11             |

The csv-file:
Dentzil;myjinxin2015;raulbc777;smile67;SteffenVogel_79\n
3907;17945;10091;10088;10132\n
48;2;12;13;11
*/
//There is no need for prechecks. You will always get a correct string with more than 1 line und more than 1 row. All columns will have different names.
//Have fun coding it and please don't forget to vote and rank this kata! :-)
//I have created other katas. Have a look if you like coding and challenges.


//Step: 
//1.)Group elements into columns
//2.)Sort the groups alphabetically
//3.)Combine the groups
//1.Be able to access each csv files in the table.
//3.Arrange files in alphabetical and incasesensitive manner.


function sortCsvColumns(csvFileContent) {
    let WholeArr = [];
    let splittedcsvFile = csvFileContent.split(/\n/g);
    let numberOfRows = splittedcsvFile.length;
    let numberOfColumns = splittedcsvFile[0].split(";").length;
    let seperatedArraysarray = splittedcsvFile.map(elem=>elem.split(";"))
    let sortingArray;
    finalSeparatedArray = []
    for(let j=0;j<numberOfColumns;j++){
        let trackingArray = []
        for(let i=0;i<numberOfRows;i++){
            trackingArray.push(seperatedArraysarray[i][j])
        }
        finalSeparatedArray.push(trackingArray);
    }
    sortingArray = finalSeparatedArray.map(elem=>elem[0].toLowerCase())
    let sortedArray = sortingArray.sort()
    console.log(finalSeparatedArray[3])
    let final = [];
    for(let j = 0; j < sortedArray.length; j++){
        for(let i = 0; i < sortedArray.length; i++){
            if(sortedArray[j] == finalSeparatedArray[i][0].toLowerCase()){
                final.push(finalSeparatedArray[i])
            }
        } 
    }
    
    let newRow = []
    for(let i = 0; i < final[0].length; i++){
        newRow.push(final.map(elem => elem[i]).join(";"));
    }
    newRow2 = newRow.join("\n")

    console.log(newRow2)
    return newRow2;
}


module.exports = sortCsvColumns;