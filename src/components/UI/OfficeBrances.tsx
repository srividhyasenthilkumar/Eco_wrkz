import Image from "next/image";
import t_nagar from "../../assets/home/t-nagar.webp"
import anna_nagar from "../../assets/home/anna_nagar.webp"
import korattur from "../../assets/home/korattur.webp"
import shenoy_nagar from "../../assets/home/shenoy_nagar.webp"
import guindy from "../../assets/home/guindy.webp"
import omr from "../../assets/home/omr.webp"

export default function OfficeBrancespage(){
    return(
        <>
        <section className="max-w-7xl mx-auto mt-10">
       <h2 className="text-2xl py-5 md:text-5xl font-bold text-center ">Our coworking office Branches</h2>
   <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 px-3">
    <div>
      <Image
        src={t_nagar}
                alt="t-nagar"
                
                width={1600}
                height={2148}
                className="object-cover ">
                
        </Image>
    </div>
     <div>
 <Image
        src={anna_nagar}
                alt="t-nagar"
                
                width={1600}
                height={2148}
                className="object-cover ">
                
        </Image>
    </div> 
    <div>
 <Image
        src={korattur}
                alt="t-nagar"
                
                width={1600}
                height={2148}
                className="object-cover ">
                
        </Image>
    </div>
    <div>
 <Image
        src={shenoy_nagar}
                alt="t-nagar"
                
                width={1600}
                height={2148}
                className="object-cover ">
                
        </Image>
    </div>
       <div>
 <Image
        src={guindy}
                alt="t-nagar"
                
                width={1600}
                height={2148}
                className="object-cover ">
                
        </Image>
    </div>
    <div>
 <Image
        src={omr}
                alt="t-nagar"
                
                width={1600}
                height={2148}
                className="object-cover ">
                
        </Image>
    </div>
</div>
</section>

        </>
    )
}