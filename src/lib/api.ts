import axios from "axios";
const Api_Token = process.env.NEXT_PUBLIC_STRAPI_PUBLIC_API_TOKEN;
const Backend_Base_Url = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

interface FetchBlogsParams {
  page: number;
  pageSize: number;
}

export const fetchBlogs = async ({
  page,
  pageSize,
  locale,
}: FetchBlogsParams & { locale: string }) => {
  try {
    const response = await axios.get(
      `${Backend_Base_Url}/api/furniture-sites?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}&locale=${locale}`,
      {
        headers: {
          Authorization: `Bearer ${Api_Token}`,
        },
      }
    );
    console.log("Fetched blogs data:", response.data);

    // Ensure that the response data has the expected structure
    const blogs = response.data;

    // Optionally, check and return if any errors are present
    if (!blogs || blogs.length === 0) {
      throw new Error("No blog data found");
    }

    return blogs; // Return the full list of blogs
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
};

export const fetchBlogDetailById = async (id: string, locale: string) => {
  try {
    const response = await axios.get(
      `${Backend_Base_Url}/api/furniture-sites/${id}?populate=*&locale=${locale}`, // Fetch single blog by its ID
      {
        headers: {
          Authorization: `Bearer ${Api_Token}`,
        },
      }
    );
    return response.data; // Return the blog data
  } catch (error) {
    console.error("Error fetching blog detail by ID:", error);
    throw error; // Rethrow the error for handling in the component
  }
};

export const fetchPrivacyPolicy = async (locale: string) => {
  try {
    const response = await axios.get(
      `${Backend_Base_Url}/api/privacy-policy?locale=${locale}`,
      {
        headers: {
          Authorization: `Bearer ${Api_Token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching privacy policy:", error);
    throw error;
  }
};

export const fetchTermsAndConditions = async (locale: string) => {
  try {
    const response = await axios.get(
      `${Backend_Base_Url}/api/terms-and-condition?locale=${locale}`,
      {
        headers: {
          Authorization: `Bearer ${Api_Token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching terms and conditions:", error);
    throw error;
  }
};
