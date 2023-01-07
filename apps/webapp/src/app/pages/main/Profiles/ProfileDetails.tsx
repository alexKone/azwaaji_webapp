import { useParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import CONSTANTS from '../../../../constants';
import { Loading } from '@azwaaji/shared/ui';
import { IProfile } from '../../../types';

export default function ProfileDetails() {
  const { id } = useParams();
  const { data, error, loading } = useFetch<IProfile>(
    `${CONSTANTS.baseUrl}/profiles/${id}.json`
  );

  return (
    <>
      {loading && <Loading />}
      {data && (
        <section>
          <div>
            <div>
              <h3>Infos générales</h3>
              <div>
                <p>lieu: {data.address.country}</p>
                <p>age: 32 ans</p>
                <p>statut: {data.information.maritalStatus}</p>
                <p>nombre d'enfants: {data.information.children}</p>
                <p>Origine: Pakistanaise</p>
              </div>
            </div>

            <div>
              <h3>Personnalité</h3>
              <div>
                <p>{data.information.description}</p>
              </div>
            </div>

            <div>
              <h3>Physique</h3>
              <div>
                <p>poids: ...</p>
                <p>taille: ...</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
