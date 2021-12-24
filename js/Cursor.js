AFRAME.registerComponent("cursor-listener",{
    schema:{
        itemid:{default:"",type:"string"}
    },
    init:function(){
        this.mouseEnter()
        this.mouseLeave()
    },
    mouseEnter:function(){
        this.el.addEventListener("mouseenter",()=>{
            var id = this.el.getAttribute("id")
            var places = ["taj-mahal", "budapest", "new-york-city", "eiffel-tower"]
            if(places.includes(id)){
                var place = document.querySelector("#places-container")
                place.setAttribute("cursor-listener",{itemid:id})
                this.el.setAttribute("material",{color:"green"})
            }
        })
    },
    mouseLeave:function () {
        //Cursor 'mouseleave' Events
        this.el.addEventListener("mouseleave", () => {
          const { itemid } = this.data;
          if (itemid) {
            const el = document.querySelector(`#${itemid}`);
            const id = el.getAttribute("id");
            if (id == itemid) {
              el.setAttribute("material", {
                color: "#0077CC"
              });
            }
          }
        });
      },
    });