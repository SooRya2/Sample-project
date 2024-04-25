import  {usefetchwrapper} from "../utils/fetchwrapper";

export const RentalService=()=>{
    const fetchwrapper=usefetchwrapper();
    const baseurl='/Rental';

    function getrentbyid(id)
    {
        const url=`${baseurl}/${id}`;
        return fetchwrapper.get(url);
    }

  

    function getallrentals()
    {
        const url=`${baseurl}`;
        return fetchwrapper.get(url);
    }

    function addrental(rentaldata)
    {
        const url=`${baseurl}/post`;
        return fetchwrapper.post(url,rentaldata);
    }

    function deleterental(id)
    {
        const url=`${baseurl}/delete/${id}`;
        return fetchwrapper.delete(url);
    }

    function updaterental(rentaldata)
    {
        const url=`${baseurl}/update`;
        return fetchwrapper.put(url,rentaldata);
    }

    function getbyrent(rent)
    {
        const url=`${baseurl}/getbyrent/${rent}`;
        return fetchwrapper.get(url);
    }
    return{
        getallrentals,
        addrental,
        deleterental,
        updaterental,
        getrentbyid,
        getbyrent
    };
}