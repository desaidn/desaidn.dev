import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function AnyRoute() {
  const navigate = useNavigate();
  useEffect(() => {
    void navigate('/');
  }, [navigate]);
}
