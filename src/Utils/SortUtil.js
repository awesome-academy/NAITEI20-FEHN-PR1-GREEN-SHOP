// sortingUtils.js

/**
 * Hàm sắp xếp linh hoạt dựa trên key và thứ tự
 * @param {Array} array - Mảng cần sắp xếp
 * @param {String} key - Key cần sắp xếp theo (ví dụ: "name", "price")
 * @param {String} order - Thứ tự sắp xếp: "asc" hoặc "desc"
 * @returns {Array} - Mảng đã sắp xếp
 */
export const sortBy = (array, key, order = "asc") => {
    return [...array].sort((a, b) => {
      // Kiểm tra nếu key không tồn tại
      if (!a[key] || !b[key]) return 0;
  
      if (typeof a[key] === "string") {
        // Nếu là string, so sánh theo thứ tự bảng chữ cái
        const comparison = a[key].localeCompare(b[key]);
        return order === "asc" ? comparison : -comparison;
      } else if (typeof a[key] === "number") {
        // Nếu là number, so sánh số
        return order === "asc" ? a[key] - b[key] : b[key] - a[key];
      }
  
      return 0; // Trường hợp không rõ type
    });
  };
  