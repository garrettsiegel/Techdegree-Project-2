//TEAM TREEHOUSE TECHDEGREE PROJECT 2, LIST FILTER AND PAGINATION, BY: GARRETT SIEGEL
//STUDY GUIDE LINK- https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

/***** DOM CONTENT LOADED EVENT TO MAKE SURE HTML PLACEMENT OF SCRIPT TAG LINKING DOES NOT MATTER *****/
document.addEventListener( 'DOMContentLoaded', () => {

/***** GLOBAL VARIABLES *****/
  //SETS VAR FOR 1ST STUDENT LIST UL
  const studentListUl = document.querySelectorAll( '.student-list' )[0];
  //SETS VAR FOR STUDENT LIST LIST ITEMS
  const studentListLi = studentListUl.children;
  //SETS VAR FOR AMOUNT OF LIST ITEMS PER PAGE
  const itemsPerPage = 10;


  /***** SHOWPAGE FUNCTION TO HIDE ALL BUT TEN STUDENTS ON ACTIVE PAGE *****/
  const showPage = ( list, page ) => {
      //VAR TO SET LOW NUMBER OF STUDENTS PER PAGE
      const low = page * itemsPerPage;
      //VAR TO SET HIGH NUMBER OF STUDENTS PER PAGE
      const high = ( page + 1 ) * itemsPerPage;
      //FOR LOOP CYCLING THROUGH LIST LENGTH
      for( let i = 0; i < list.length; i ++ ){
          //IF CONDITIONAL TO SEE IF ITEMS ARE WITHIN LOW AND HIGH PARAMETERS PER PAGE
          if( i >= low && i <= high ){
            //IF CONDITION IS TRUE, THOSE TEN ITEMS DISPLAYED
            list[i].style.display = 'block';
            //IF CONDITION IS FALSE, NOTHING IS DISPLAYED
          } else {
            list[i].style.display = 'none';
          }
      }
  }


  /***** APPEND PAGE LINKS FUNCTION TO CREATE DYNAMIC PAGINATION BUTTONS *****/
  const appendPageLinks = (list) => {
  //VAR SHOWING THE NUMBER OF STUDENTS
  const numberOfStudents = studentListLi.length;
  //VAR TO FIND TOTAL AMOUNT OF PAGES
  const amountOfPages = Math.ceil( numberOfStudents / itemsPerPage );
  //VAR CREATING NEW DIV
  const newDiv = document.createElement('div');
  //APPENDS PAGINATION CLASS NAME TO NEW DIV
  newDiv.className = 'pagination';
  //SETS VAR FOR 1ST MAIN PAGE DIV
  const mainPage = document.querySelectorAll( '.page' )[0];
  //APPENDS A NEW DIV AS CHILD ITEM TO THE DIV WITH CLASS .PAGE
  mainPage.appendChild(newDiv);
  //VAR CREATING A NEW UL
  const newDivUl = document.createElement('ul');
  //APPENDS NEW UL AS CHILD ITEM TO NEW DIV
  newDiv.appendChild(newDivUl);
  //VAR COLLECTING ANCHOR TAGS
  const anchorList = document.getElementsByTagName( 'A' );
  //FOR LOOP CYCLING THROUGH THE AMOUNT OF PAGES
  for( let i = 0; i < amountOfPages; i ++ ) {
      //VAR CREATING NEW LIST ITEM
      const newDivLi = document.createElement('li');
      //VAR CREATING ANCHOR ITEM
      const anchor = document.createElement('a');
      //APPENDS NEW LI TO NEW UL
      newDivUl.appendChild(newDivLi);
      //GIVES ANCHOR VAR A # URL ATTRIBUTE
      anchor.href = '#';
      //ADDS ONE TO EACH ANCHORS TEXT CONTENT SO THAT IT DOES NOT START WITH ZERO
      anchor.textContent = i + 1;
      //APPENDS ANCHOR TO NEW LI
      newDivLi.appendChild(anchor);
      //CLICK EVENT LISTENER FOR ANCHOR TAG
          anchor.addEventListener( "click", (e) => {
            //FOR LOOP CYCLING THROUGH ANCHOR ITEMS
            for( let i = 0; i < anchorList.length; i ++ ){
              //CLEARS CLASS NAME ON ANCHOR OBJECTS
              anchorList[i].className = '';
              //SETS ANCHOR CLICK TARGET TO ACTIVE CLASS
              e.target.className = 'active';
            }
            //SHOWPAGE FUNCTION RETURN PAGE BASED ON CLICK
            showPage( studentListLi, i );
          });
  }
  //SETS ACTIVE CLASS TO FIRST ANCHOR ITEM
  anchorList[0].className = 'active';


  }
  //SHOWPAGE FUNCTION RETURNING FIRST PAGE UPON LOAD
  showPage( studentListLi, 0 );
  //RUNS APPEND PAGE LINKS FUNCTION TO SHOW PAGE LINKS
  appendPageLinks();
});
