
const Header = ({handleChange}) => {


  return (
    <header className="header w-100">
      <div className="header_elements">
        <div className="header_elements_img col-md-12">
            <img src="./deadful_tomatoes.png" alt="logo" className="img-fluid"/>
        </div>
        <div className="header_elements_search">
            <div className="header_elements_search_group col-md-12">
                <i class="bi bi-search"></i>
                <input placeholder="Title" onChange={handleChange}/>
            </div>    
        </div>
      </div>
    </header>
  );
};

export default Header;