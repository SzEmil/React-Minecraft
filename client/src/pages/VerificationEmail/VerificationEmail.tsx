import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectPageLanguage } from '../../redux/globals/globalsSelectors';
import { useEffect } from 'react';
import { verifyUserEmail } from '../../redux/user/userOperations';
import { selectAuthUserEmailConfrimed } from '../../redux/user/userSelectors';

export const VerificationEmail = () => {
  const dispatch: AppDispatch = useDispatch();
  const language = useSelector(selectPageLanguage);
  const emailConfirmation = useSelector(selectAuthUserEmailConfrimed);
  const { token } = useParams();
  console.log(emailConfirmation);
  useEffect(() => {
    if (token) dispatch(verifyUserEmail(token));
  }, []);
  return (
    <div>
      Check your inbox and click in the link in email to verify your account.
      Check also spam folder
      {emailConfirmation ? (
        <p>Zweryfikowano email</p>
      ) : (
        <p>Nie zweryfikowano email</p>
      )}
    </div>
  );
};
