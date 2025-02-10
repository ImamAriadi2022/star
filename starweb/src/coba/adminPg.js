import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Table, Alert, Button, Modal } from 'react-bootstrap';
import axios from 'axios';

function Admin() {
  const [transactions, setTransactions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [bankAccounts, setBankAccounts] = useState([]);

  useEffect(() => {
    // Fetch transactions from API
    axios.get('http://localhost/star-1/backend/coba/get_transactions.php')
      .then(response => {
        const transactionsArray = Array.isArray(response.data) ? response.data : Object.values(response.data);
        setTransactions(transactionsArray);
      })
      .catch(error => {
        console.error('There was an error fetching the transactions!', error);
      });
  }, []);

  const handleTransfer = async (transaction) => {
    const amountToTransfer = transaction.price * 0.9;
    try {
      const response = await axios.get(`http://localhost/star-1/backend/coba/get_bank_accounts.php?influencer=${transaction.influencer_id}`);
      const bankAccountsArray = Array.isArray(response.data) ? response.data : Object.values(response.data);
      setBankAccounts(bankAccountsArray);
      setSelectedTransaction({ ...transaction, amountToTransfer });
      setShowModal(true);
    } catch (error) {
      console.error('There was an error fetching the bank accounts!', error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedTransaction(null);
    setBankAccounts([]);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2>Data Transaksi</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Brand</th>
                <th>Influencer</th>
                <th>Kampanye</th>
                <th>Harga</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.brand}</td>
                  <td>{transaction.influencer}</td>
                  <td>{transaction.campaign}</td>
                  <td>{transaction.price}</td>
                  <td>{transaction.status}</td>
                  <td>
                    {transaction.status === 'sukses' && (
                      <Button variant="success" onClick={() => handleTransfer(transaction)}>
                        Transfer Uang
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Transfer Uang ke Influencer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedTransaction && (
            <>
              <p>Nama Influencer: {selectedTransaction.influencer}</p>
              <p>Jumlah Transfer: Rp {selectedTransaction.amountToTransfer.toLocaleString()}</p>
              <h5>Rekening Bank Influencer:</h5>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Jenis Bank</th>
                    <th>Nomor Rekening</th>
                    <th>Nama Pemilik Rekening</th>
                  </tr>
                </thead>
                <tbody>
                  {bankAccounts.map((account, index) => (
                    <tr key={index}>
                      <td>{account.bank_type}</td>
                      <td>{account.account_number}</td>
                      <td>{account.account_holder}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Tutup
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Admin;