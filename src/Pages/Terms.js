import { useEffect, useState } from 'react'
import Loders from './Loders';
import { API } from '../Api';
import { END_POINT } from '../Api/UrlProvider';
import { useNavigate } from 'react-router';
const Terms = () => {
    const navigate = useNavigate();
    const [question, setquestion] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const getApiData = () => {
        setIsLoading(true);
        API.getAuthAPI(END_POINT?.Allploicy, navigate)
            .then((res) => {
                if (res.data) {
                    setquestion(res?.data?.data);
                } else {
                    console.error(res.error || "An error occurred");
                }
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        getApiData();
    }, []);
    const [headings, setHeadings] = useState([]);
    const htmlString = question
        ?.filter((item) => item?.policyType === "term_condition")
        .map((item) => item.content)
        .join("");
        useEffect(() => {
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(htmlString, "text/html");
        const h3Elements = htmlDoc.querySelectorAll("h3");
        const h3Texts = Array.from(h3Elements).map((el) => el.textContent.trim());
        setHeadings(h3Texts);
    }, [question]);
const handleScroll = (id) => {
  const element = document.getElementById(id);
  const headerOffset = 80; // header height
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};
    return (
        <>
            <Loders isLoading={isLoading} />
            <div className=' md:max-w-7xl max-w-8xl mx-auto  py-7 flex flex-col   p-6 min-h-[calc(100vh-175px)] '>
                        <h1 className="text-[44px] mb-2!font-serif font-bold text-customcolor">Terms &amp; Condition</h1>    
                <div className="grid grid-cols-12 gap-5 text-customcolor">
                    {/* Main Content */}
                    <div className="col-span-12 md:col-span-9 order-last md:order-first">
                        {question?.filter((item) => item?.policyType === "term_condition").map((item, index) => (
                            <div key={index} className="policy-content [&_h1]:hidden">
                                <div dangerouslySetInnerHTML={{ __html: item.content }} />
                            </div>
                        ))}
                    </div>
                    {/* Sidebar */}
                    <div className="col-span-12 md:col-span-3 bg-[#F7F7F7] text-customcolor 
                    text-lg font-[400] shadow-sm  md:sticky top-28 mt-5  min-h-fit md:h-[475px] rounded-3xl">
                        <div className="px-5 py-4 md:px-6 md:py-8">
                            <ol className=' list-decimal space-y-2 pl-4'>
                                {headings.map((heading, index) => (
                                    <li className='mb-3' style={{ lineHeight: "1.5" ,cursor:"pointer"}} key={index}>
                                        <a onClick={() => handleScroll(heading.split(". ")[1])} className=" hover:underline">{heading.split(". ")[1]}</a>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Terms;
