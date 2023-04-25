
const validation = (userData) => {

        const errors = {};
      
        if (!/^\S{1,35}@\S+\.\S+$/.test(userData.email)) {
          errors.email = 'Ingresa un eMail valido';
        }

        if (!userData.email) {
            errors.email = '';
        }

        if (userData.password==='') {
            errors.password = '';
        }
      
        if (!/^(?=.*[A-Z])(?=.*\d).{5,}$/.test(userData.password)) {
          errors.password = 'debe tener al menos seis caracteres, un numero y una mayuscula';
        }
      
        return errors;
      };

export default validation;