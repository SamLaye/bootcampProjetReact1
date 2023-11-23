import { useState } from 'react';
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';
import Template from './layouts/Template';


function App() {
  const menuItems = [
    { list: "list1", id: "img1", icon: "bi bi-grid", name: "overview" },
    { list: "list2", id: "img2", icon: "bi bi-file-earmark", name: "documents" },
    { list: "list3", id: "img3", icon: "bi bi-credit-card-fill", name: "payments" },
    { list: "list4", id: "img4", icon: "bi bi-chat-left", name: "messages" },
    { list: "list5", id: "img5", icon: "bi bi-pie-chart", name: "report center" }
  ]
  const [toggle, setToggle] = useState(true)

  const handleToggle = () => {
    setToggle(!toggle)
  }
  
  return (
    <Template
      toggle={toggle} 
      sidebar={<Sidebar handleToggle={handleToggle} toggle={toggle} 
      munuItems={menuItems} />} 
      navbar={<Navbar handleToggle={handleToggle} toggle={toggle}/>}
    >
      <Home />
    </Template>
  );
}

export default App;
