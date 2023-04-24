// DEFINE YOUR FUNCTION BELOW:
function capitalize(str){
    let first_Letter = str[0];
    first_Letter = first_Letter.toUpperCase();
    let Letter = str.slice(1);
    let result = first_Letter + Letter;
    return result;
}